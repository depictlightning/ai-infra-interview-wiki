import json
from pathlib import Path

root = Path(__file__).resolve().parent
metadata = json.loads((root / 'sample-metadata.json').read_text(encoding='utf-8'))
company_categories = {
    '字节跳动': 'T0 大厂', '腾讯': 'T0 大厂', '阿里巴巴': 'T0 大厂', '百度': 'T0 大厂',
    '拼多多': 'T1 大厂 / 独角兽',
    '月之暗面': 'T2 AI 独角兽',
    '百度昆仑芯': 'T3 芯片 / 硬件', '清微智能': 'T3 芯片 / 硬件',
    '蔚来': 'T4 车企 / 自驾', '小鹏': 'T4 车企 / 自驾',
}
assert len(metadata) == len({item['id'] for item in metadata})
for item in metadata:
    item['category'] = company_categories.get(item['company'], 'T5 其他')
    item['body'] = (root.parent / 'notes' / (item['id'] + '.md')).read_text(encoding='utf-8')
    assert item['body'].strip()
(root.parent / 'dist' / 'data.js').write_text(
    'const interviews = ' + json.dumps(metadata, ensure_ascii=False, indent=2) + ';\n',
    encoding='utf-8',
)
print('Built', len(metadata), 'notes')
