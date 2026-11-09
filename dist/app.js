const main = document.querySelector('#main');
const sidebar = document.querySelector('#sidebar');
const search = document.querySelector('#search');
const year = document.querySelector('#year');
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const categories = [...new Set(interviews.map(item => item.category))].sort();
const query = () => search.value.trim().toLowerCase();
const postYear = item => /^\d{4}-\d{2}-\d{2}$/.test(item.date || '') ? item.date.slice(0, 4) : 'unknown';
const years = [...new Set(interviews.map(postYear).filter(value => value !== 'unknown'))].sort().reverse();
year.innerHTML += years.map(value => `<option value="${value}">${value} 年</option>`).join('') + (interviews.some(item => postYear(item) === 'unknown') ? '<option value="unknown">年份未知</option>' : '');
const matches = item => (!year.value || postYear(item) === year.value) && JSON.stringify(item).toLowerCase().includes(query());
const link = item => `#${encodeURIComponent(item.id)}`;
const published = item => item.date ? `发布 ${esc(item.date)}` : '发布日期未知';
const sourceLink = item => { try { const url = new URL(item.source); return url.protocol === 'https:' && ['xiaohongshu.com', 'nowcoder.com'].some(domain => url.hostname === domain || url.hostname.endsWith('.' + domain)) ? `<a class="source-link" href="${esc(url.href)}" target="_blank" rel="noopener noreferrer">查看原帖 ↗</a>` : ''; } catch { return ''; } };
function renderSidebar() {
  const selected = decodeURIComponent(location.hash.slice(1));
  document.querySelector('#side-count').textContent = `${interviews.filter(matches).length} 篇`;
  sidebar.innerHTML = categories.map((category) => {
    const i = Number(category[1]);
    const entries = interviews.filter(item => item.category === category && matches(item));
    if (!entries.length) return '';
    const companies = [...new Set(entries.map(item => item.company))];
    return `<details class="category category-${i}" open><summary>${esc(category)} <span>${entries.length}</span></summary>${companies.map(company => `<details class="company" ${entries.some(item => item.company === company && item.id === selected) || query() ? 'open' : ''}><summary>${esc(company)} <span>${entries.filter(item => item.company === company).length}</span></summary>${entries.filter(item => item.company === company).map(item => `<a class="item ${selected === item.id ? 'selected' : ''}" href="${link(item)}">${esc(item.role)} · ${esc(item.stage)}<small class="item-date">${published(item)}</small></a>`).join('')}</details>`).join('')}</details>`;
  }).join('') || '<p class="empty">没有匹配的面经。</p>';
}
function render() {
  renderSidebar();
  const id = decodeURIComponent(location.hash.slice(1));
  const item = interviews.find(entry => entry.id === id);
  if (item) {
    main.innerHTML = `<article class="article"><div class="meta"><span class="badge">${esc(item.category)}</span><span class="badge neutral">${esc(item.stage)}</span><span class="date">${published(item)}</span></div><h1>${esc(item.role)} · ${esc(item.stage)}</h1><p class="article-intro">${esc(item.company)} · ${esc(item.type)}</p><div class="tags">${item.tags.map(tag => `<span>${esc(tag)}</span>`).join('')}</div><div class="notice">正文按原帖编号排版，候选人回答仅供参考；发布日期不一定是面试日期。 ${sourceLink(item)}</div><div class="article-body"><div class="original-body">${esc(item.body)}</div></div><a class="back" href="#">← 返回面经目录</a></article>`;
  } else if (id.startsWith('company:')) {
    const company = id.slice(8);
    const entries = interviews.filter(entry => entry.company === company && matches(entry));
    main.innerHTML = `<article class="article"><div class="meta"><span class="badge">公司面经</span></div><h1>${esc(company)}</h1><p class="article-intro">${entries.length} 篇面经</p><div class="company-results">${entries.map(entry => `<a class="result-link" href="${link(entry)}">${esc(entry.role)} · ${esc(entry.stage)} <small class="result-date">${published(entry)}</small><span>→</span></a>`).join('')}</div><a class="back" href="#">← 返回面经目录</a></article>`;
  } else if (id === 'about') {
    main.innerHTML = '<article class="article"><div class="meta"><span class="badge">关于本站</span></div><h1>关于收录</h1><p class="article-intro">这里用于整理 AI Infra 面试经验，按公司、岗位和方向浏览。</p><div class="notice">尽量保留公开面经原文和来源，候选人回忆或回答可能存在偏差。</div><a class="back" href="#">← 返回面经目录</a></article>';
  } else {
    const found = interviews.filter(matches);
    main.innerHTML = `<div class="hero"><div class="hero-meta"><span class="badge">面经目录</span><span>${interviews.length} 篇面经 · ${new Set(interviews.map(x => x.company).filter(name => name !== '公司未注明')).size} 家公司 · ${categories.length} 个分类</span></div><h1>AI Infra 面试手记</h1><p>整理 AI Infra 面试经验，按公司与方向分类，帮助你找到适合自己的备考资料。</p><a class="primary" href="${found.length ? link(found[0]) : '#directory'}">开始浏览 <span>→</span></a></div><section id="directory"><div class="section-head"><h2>${query() ? '搜索结果' : '分类浏览'}</h2><p>选择公司，查看对应的面试记录。分类仅供浏览，不代表客观排名。</p></div><div class="grid">${categories.map((category) => {const i=Number(category[1]);const entries=found.filter(entry=>entry.category===category); if(!entries.length)return '';const companies=[...new Set(entries.map(entry=>entry.company))];return `<section class="card card-${i}"><div class="card-top"><span class="card-index">${i}</span><h3>${esc(category)}</h3><span class="card-count">${entries.length} 篇 · ${companies.filter(name => name !== '公司未注明').length} 家公司</span></div><div class="card-desc">${esc(['大型互联网公司的 AI Infra 面经','互联网公司及成长型企业的 AI Infra 面经','AI 模型公司的训练、推理与系统面经','芯片、硬件与底层计算相关面经','车企与自动驾驶相关 AI Infra 面经','未分类或未注明公司的面经'][i] || 'AI Infra 相关面经')}</div><div class="company-links">${companies.map(company=>{const companyEntries=entries.filter(x=>x.company===company);return `<a href="#${encodeURIComponent('company:' + company)}">${esc(company)} <small>${companyEntries.length}</small></a>`}).join('')}</div></section>`}).join('')}</div>${found.length ? '' : '<p class="empty">没有找到匹配结果，试试其他关键词。</p>'}<div class="notice">本地试验数据：来自公开面经的整理，保留原帖供核对。</div></section>`;
  }
}
search.addEventListener('input', () => { if (location.hash && location.hash !== '#') location.hash = ''; render(); });
year.addEventListener('change', () => { if (location.hash && location.hash !== '#') location.hash = ''; render(); });
window.addEventListener('hashchange', render);
render();
