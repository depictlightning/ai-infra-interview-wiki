const interviews = [
  {
    "id": "xhs-6abe3c67000000001802a6f0",
    "category": "T2 AI 独角兽",
    "company": "月之暗面",
    "role": "算子与推理 Infra",
    "stage": "一面",
    "date": "2026-10-01",
    "type": "真实面经整理",
    "source": "https://www.xiaohongshu.com/explore/6abe3c67000000001802a6f0",
    "tags": [
      "算子",
      "并行"
    ],
    "body": "Kimi AI Infra 一面。\n\n1. DeepEP normal mode 与 low-latency mode 有什么区别？\n   - 候选人记录：Normal 用于训练 / Prefill，吞吐优先，rank-major 去重；Low-latency 用于 Decode，延迟优先，不要 d2h。\n2. Ulysses SP 和 Ring Attention 有什么区别？\n   - 候选人记录：Ulysses 使用 All-to-All；Ring 传递 KV，可重叠通信与计算。\n3. DCP 如何实现？\n   - 候选人记录：KV 按 sequence 分片；通信 Q，各 Rank 计算 partial attention，最后 merge O / LSE。\n4. Online Softmax / LSE merge 如何实现？\n   - 候选人记录：running max + rescale + 加权合并。\n5. Ampere → Hopper → Blackwell 有什么变化？\n   - 候选人记录：cp.async / MMA → TMA / WGMMA → TCGEN05 / Tensor Memory；越来越强调异步编程和显式 software pipeline。\n6. Tensor Memory 如何实现 pipeline？如何选择 num_stages？\n   - 候选人记录：double buffer；结合计算 / 访存比例和片上资源约束。\n7. register / shared memory 如何影响 occupancy？Persistent Kernel 如何隐藏 latency？\n   - 候选人记录：影响 resident CTA / warp 数；Persistent Kernel 更依赖 Kernel 内的 software pipeline。\n8. Grouped GEMM 的 contiguous / masked 有什么区别？tile 如何调度？\n   - 候选人记录：动态 M / padding；tile scheduling；swizzle / L2 reuse。\n9. MXFP8 和 block-wise FP8 有什么区别？\n   - 候选人记录：量化粒度、scale 开销，以及 scale 与 MMA 的 overlap。\n10. 如何选择 TMA 和 cp.async？\n    - 候选人记录：TMA 适合规则 tensor tile；cp.async 更灵活。\n"
  },
  {
    "id": "xhs-6a6b6aee0000000005022bc0",
    "category": "T0 大厂",
    "company": "字节跳动",
    "role": "芯片部门 · 训练 Infra",
    "stage": "一面",
    "date": "2026-07-30",
    "type": "真实面经整理",
    "source": "https://www.xiaohongshu.com/explore/6a6b6aee0000000005022bc0",
    "tags": [
      "分布式训练",
      "通信"
    ],
    "source_title": "字节芯片部门一面（AI infra 训练相关）",
    "body": "候选人说明：面试官态度友好，字节芯片办公地点也在张江。候选人分享面经的原因之一是当时 Infra 分布式训练面经较少，面经以推理方向为主。面试氛围开放，主要由候选人讲述。\n\n1. 为什么融合算子可以提升线性度？线性度如何计算？候选人认为可以继续思考这个问题。\n2. 如何对比精度？\n3. 是否了解 All Gather 的实现原理？有哪些优化手段？\n   - 面试官回答：可以每张卡一个分片，再分块 gather。候选人询问是否相当于 CP 的 All Gather 转为 P2P，面试官表示是。\n4. 了解哪些通信方式？项目中使用了什么通信方式？是否使用 RDMA？常见通信方式有哪些，如 NVLink、PCIe 等？\n5. 为什么要融合算子？候选人认为自己对 MoE FC 原理的理解还可以加深。\n6. 如何优化 OOM、通信超时和显存占用？\n7. 如何定位精度问题？\n8. 候选人提到算子接入后可能引入精度问题，例如某个算子不连续，需要 contiguous。面试官追问：是加了一个 contiguous，还是提出了需求？\n9. 是否了解 PyTorch 的 storage？面试官解释，PyTorch 中存储的是 meta 信息，通过 stride 等定义矩阵元素的位置，因此一般直接 contiguous 即可。\n10. 有哪些显存优化方法？\n    - 候选人回答：ZeRO、PP、EP、TP、CP。\n11. 提到 EP 时，面试官要求介绍 DeepEP。候选人认为该部分还有提升空间。\n12. FSDP 的实现及前向、反向流程是什么？\n    - 候选人回答：前向 All Gather 参数、反向梯度，最后 All Reduce 更新优化器状态。候选人对自己的回答不满意。\n    - 面试官还提到 GQA、KV Cache 优化、重计算；候选人表示自己其实已提到。\n13. 编程：连续子数组和。\n\n面试反馈：未通过。候选人感觉自己的资历和经验较浅，面试官希望候选人的项目知识面更广。\n#aiinfra[话题]# #模型训练[话题]# #大模型[话题]# #转码[话题]# #找工作[话题]# #megatron[话题]# #cuda[话题]#\n"
  },
  {
    "id": "xhs-67b6d6b0000000002a00deae",
    "category": "T3 芯片 / 硬件",
    "company": "百度昆仑芯",
    "role": "大模型推理框架开发",
    "stage": "二面",
    "date": "2025-02-20",
    "type": "真实面经整理",
    "source": "https://www.xiaohongshu.com/explore/67b6d6b0000000002a00deae",
    "tags": [
      "GPU",
      "推理"
    ],
    "body": "岗位：大模型推理框架开发\n时间：08.06 晚上 19:00–20:00\n\n项目：\n1. 选择项目中一个最能体现计算机水平的问题，描述背景、问题、解决方案及效果。\n2. 开发算子时使用什么工具进行分析？\n3. 使用什么工具检查访存次数？什么是瓶颈？\n4. 如何分析 kernel 内部运行时的算子性能？不考虑 memcpy、malloc 预分配好的内存耗时。\n5. 如何判断算子是否已优化到极致？是否还能继续优化？\n6. Nsight Systems（程序瓶颈）和 Nsight Compute（算子优化瓶颈）。\n\nGPU 基础：\n7. GPU 内存层次（memory hierarchy）。\n8. 数据从 global memory 放到 local memory 要经过 L1、L2 cache。\n9. CPU cache line 是 64 Bytes，GPU 的一个 sector 多大？\n10. 数据从 global memory 搬运到 shared memory 的过程。\n11. 发射大量线程后，GPU 如何调度、选择执行哪个 warp？\n12. warp 的 shuffle 指令。\n13. up、down 和 XOR 的使用场景。\n\nC++：\n14. 完整类型和非完整类型。\n15. 用 pointer 定义一个类型 A，它放在堆上还是栈上？\n16. 析构函数抛出异常会导致什么情况？\n17. make_unique 的实现原理。\n\n工程：\n18. git rebase 的作用。\n19. amend 的作用。\n\n编程：\n20. 使用模板函数和 namespace 实现 std::move。\n21. 使用模板实现 CPU 版 C++ Softmax。\n\n#面经[话题]# #AI[话题]# #留学生[话题]# #百度[话题]# #秋招[话题]# #春招[话题]# #实习[话题]# #计算机[话题]# #面试[话题]# #大模型[话题]#\n"
  },
  {
    "id": "xhs-6a919993000000002c03ef3a",
    "category": "T0 大厂",
    "company": "字节跳动",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-08-28",
    "type": "真实面经整理",
    "source": "https://www.xiaohongshu.com/explore/6a919993000000002c03ef3a",
    "tags": [
      "算子",
      "并行"
    ],
    "source_title": "字节ai infra 一面",
    "body": "候选人反馈：问题较基础。此前主要做框架，发现需要补充算子知识。\n\n1. MFU 如何计算？\n2. 除矩阵乘之外，Softmax 等算子如何计算 FLOPs？\n3. 是否计算过 HFU？HFU 和 MFU 有什么区别？\n4. TP 的通信过程是怎样的？通信量如何计算？\n5. CP 的通信量如何计算？\n6. EP 的通信量如何计算？\n7. PP 的通信量如何计算？\n8. FlashAttention 3 相比 FlashAttention 2 做了哪些改进？\n9. FlashAttention 3 中的计算重叠具体是什么？\n10. TMA 出现之前如何搬运数据？TMA 有什么优势？\n11. 一些与项目有关的问题。\n12. GQA 的 backward 如何计算？\n13. 手写反转链表。\n\n候选人反馈：第二天收到通过通知。\n#面经[话题]# #校招[话题]#\n"
  },
  {
    "id": "xhs-6a50bae7000000000803e7a3",
    "category": "T0 大厂",
    "company": "腾讯",
    "role": "混元青云 · AI Infra",
    "stage": "一面",
    "date": "2026-07-10",
    "type": "真实面经整理",
    "source": "https://www.xiaohongshu.com/explore/6a50bae7000000000803e7a3",
    "tags": [
      "GPU",
      "算子"
    ],
    "source_title": "AI Infra | 面经| 腾讯混元青云",
    "body": "# 一面\n\n面试约 30 分钟。候选人表示面试官声音年轻、好听，迟到约三分钟，对面试影响不大。\n\n1. 自我介绍。\n2. 介绍简历中的算子优化思路和部分细节，提问不算特别深入。\n3. 面试官评价上一段实习经历看起来较杂，候选人表示认同。\n4. 华为的卡与 NVIDIA 的卡在架构、适用场景和优势上有何异同？\n5. TileLang 和 Triton 有哪些性能差异？为什么？是否亲自验证过？候选人表示没有上手验证过。\n6. GEMM 算子有哪些主流优化思路？是否实践过？\n7. 动手实现一个 quant GEMM 算子，可使用 CUDA、Triton、TileLang 或其他熟悉的语言。\n\n候选人反馈：整体体验轻松。面试官态度友好、善于引导，在候选人回答不佳时会笑着给予提示；候选人形容其笑声有“中登”风格，尽管声音听起来很年轻。\n\n最后双方讨论了 AI Infra 行业近一年热度回升、agent 在实际工作中的增效程度、混元组工作强度，以及性能优化人员打榜的热情等话题。\n\n#infra[话题]# #AIInfra[话题]# #面经[话题]# #内推[话题]# #人类一思考[话题]# #大厂[话题]# #ai[话题]# #日常实习[话题]# #aiinfra[话题]# #互联网人设[话题]#\n"
  },
  {
    "id": "nowcoder-f6699e9cec7f495597b68d82e6f1a0ea",
    "category": "T4 车企 / 自驾",
    "company": "蔚来",
    "role": "AI Infra 测试工程师",
    "stage": "一面",
    "date": "2026-11-05",
    "type": "候选人面经",
    "source": "https://www.nowcoder.com/feed/main/detail/f6699e9cec7f495597b68d82e6f1a0ea",
    "tags": [
      "AI Infra",
      "测试"
    ],
    "body": "1. 详细介绍毕业设计中深度学习 LSTM 模型的应用。\n2. 为什么选择 LSTM？它与普通 RNN 有什么区别？\n3. 模型的数据量和数据划分比例是多少？\n4. 模型输入的 shape 是什么？Batch size 如何选取？\n5. 是否了解 Tensor 的 NCHW shape？\n6. 同一个模型使用相同输入，在安卓 CPU、英伟达 CPU 和自研 NPU 上的表现存在差异。如何看待这一问题？这是否属于 bug？有哪些分析方向？\n7. 介绍简历中跨切片流量串扰问题的发现、复现和定位过程。\n8. 如何判定业务验证的成功率？\n9. 介绍一个熟悉的特性从设计到落地的过程。\n10. 介绍与 AI link 相关的平台开发工作。\n11. 介绍美赛项目，以及该项目对学习 AI 的启发。\n12. 测试工程师在 AI 时代应具备哪些素质？\n\n#今年秋招行情最好的方向是__#\n"
  },
  {
    "id": "nowcoder-945709685955395584",
    "category": "T4 车企 / 自驾",
    "company": "小鹏",
    "role": "深度学习平台研发工程师",
    "stage": "轮次未注明",
    "date": "2026-10-30",
    "type": "候选人面经",
    "source": "https://www.nowcoder.com/discuss/945709685955395584",
    "tags": [
      "平台",
      "分布式训练"
    ],
    "body": "# 小鹏集团深度学习平台研发工程师面经\n\n岗位背景：27 届校招，深度学习平台研发工程师。\n面试形式：飞书视频面试，含在线代码考核。\n考察方向：AI Infra 基建、分布式训练、云原生调度、大模型推理优化、图论算法。\n\n候选人候选人复盘：平台研发岗位与纯算法岗位不同，重视底层原理、系统架构能力和工程落地经验。以下是面试中重点追问的方向。\n\n## 一、分布式训练与 GPU 资源调度\n\n1. DDP（Distributed Data Parallel）的底层机制。\n\n考点：多卡训练是怎么同步梯度的？\n\n候选人复盘：重点讲了 DDP 的多进程架构（无主卡概念）和 Ring All-Reduce 机制。面试官追问了“梯度分桶（Bucketing）与计算通信重叠”是怎么实现的，这里必须懂反向传播过程中如何隐藏通信延迟。\n\n候选人提示：千万别把 DDP 和 DP（DataParallel）搞混，强调 DDP 绕开了 GIL 锁，且不节省单卡显存。若提梯度累积，要懂 no_sync()。\n\n2. GPU 架构与 LLM 推理瓶颈。\n\n考点：H100 和 B200 有什么区别？LLM 推理瓶颈在哪？\n\n候选人复盘：要能清晰区分 Prefill（计算密集） 和 Decode（带宽密集） 两个阶段。对比了 Hopper 和 Blackwell，提到了双芯片封装带来的 HBM 带宽提升（8 TB/s），以及 Blackwell 原生支持 FP4 精度对吞吐量的质变（但要评估精度折损）。\n\n3. K8s 中的 GPU 调度。\n\n延伸考点：平台怎么管理异构算力？（涉及云原生）\n\n## 二、云原生底座与虚拟化\n\n4. K8s 的 Pod 内部创建与调度链路。\n\n候选人复盘：从 kubectl 提交 YAML -> API Server 鉴权准入 -> etcd 存储 -> Scheduler 选节点 -> kubelet 调 CRI 起容器。面试官还问到 Pause 容器的作用（共享网络命名空间）。\n\n5. K8s、KVM 和 KubeVirt 的关系。\n\n考点：深度学习平台有时需要强隔离环境（比如跑特定的老旧框架），怎么让 K8s 管虚拟机？\n\n候选人复盘：引出了 KubeVirt。核心逻辑是“VM inside Pod”，通过 CRD 扩展 K8s API，把 KVM 虚拟机包装在 Pod 里运行。还对比了 Kata Containers（让容器变得像 VM 提供强隔离）。\n\n## 三、大模型接口与工程化\n\n6. 流式（Stream）与非流式（Non-stream）的工程差异。\n\n考点：平台对外提供推理服务，接口怎么设计？\n\n候选人复盘：非流式返回一次性 JSON，流式基于 SSE（Server-Sent Events） 持续推送 delta.content。\n\n候选人提示：流式下的 usage 字段默认隐藏，必须显式开启 stream_options；流式输出审核存在难点（Chunk 级别语义不完整，导致安全拦截失效，需要端到端的拼接校验）。\n\n7. 平台合规与安全审计。\n\n聊到了类似 OpenAI Moderation 的接口。如果平台做网关，输入输出过滤怎么做？顺带探讨了 Adversarial Prompt（对抗性提示词）如何通过编码/自重建绕过单纯的表层语义审查。\n\n## 四、编程题（图论）\n\n8. DAG（有向无环图）的拓扑排序。\n\n场景：经典的平台调度算法题（节点依赖关系、任务执行顺序）。\n\n解法：Kahn 算法（BFS）。\n\n邻接表建图，统计每个节点的入度。入度为 0 的节点入队。出队并将邻居入度减 1，若变 0 则继续入队。防御性编程：如果最后遍历的节点数小于总节点数，说明有环，应返回或输出特定标志（视题目而定）。候选人教训：在线机考不能只写 System.out.println(\"hello world\")，应使用 Scanner 读取和处理输入，否则测试用例无法通过。\n\n## 五、候选人心得\n\n1. 工程落地：平台研发极度看重“平台化思维”。你做的项目能不能抽象给全公司用？高可用、容灾、集群扩容你是怎么设计的？\n\n2. 开源与实习相结合：车企大厂（小鹏）对基础架构的要求很高，极少硬卡学历或大厂背景，更看重综合匹配度。最高级的简历故事线：在开源社区（如 K8s / vLLM）发现问题 -> 技术论坛/博客沉淀思考 -> 在实际企业项目中落地验证。候选人认为这样的经历组合很有优势。\n\n3. 坦诚面对知识盲区：面试官审美各异，有人喜欢造轮子的，有人喜欢干实事的。遇到不会的底层知识（比如具体的 CUDA 算子优化），大方承认并讲出你的排查思路，比编造答案更好。\n\n候选人建议：飞书面试不要使用豆包 / 抖音账号登录，以免影响入职背调；提前调试电脑摄像头。"
  },
  {
    "id": "nowcoder-8566c06947a0424396d9ee48e71f10b5",
    "category": "T1 大厂 / 独角兽",
    "company": "拼多多",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-10-28",
    "type": "候选人面经",
    "source": "https://www.nowcoder.com/feed/main/detail/8566c06947a0424396d9ee48e71f10b5",
    "tags": [
      "算子",
      "GPU"
    ],
    "body": "# 面经\n\n候选人说明：面试发生在约一个月前。\n\n1. 自我介绍。\n2. 结合实习经历，排查代码问题时需要监控哪些指标？\n3. 会使用哪些 AI Infra 相关工具？\n4. 什么是 bank conflict？如何解决？\n5. 如何查看和解决问题？\n6. 是否学习过 Triton？\n7. 手写字符串乘法。\n\n候选人回答：之前似乎没有做过字符串乘法，做过字符串加法，因此将乘法拆成加法实现。\n\n候选人反馈：面试持续一个多小时，应该还有其他内容，但由于时间较久、当时没有立即记录，已记不清；当时很多问题回答得不够好。\n"
  },
  {
    "id": "nowcoder-944964515630768128",
    "category": "T3 芯片 / 硬件",
    "company": "清微智能",
    "role": "AI 应用软件开发（偏编译器）",
    "stage": "一面、二面",
    "date": "2026-10-28",
    "type": "候选人面经",
    "source": "https://www.nowcoder.com/discuss/944964515630768128",
    "tags": [
      "推理",
      "编译器"
    ],
    "body": "# 一面\n\n技术面，只有一位技术面试官。\n\n1. 自我介绍。\n2. 简历中提到对 CUDA 算子进行深度定制与调优，具体做了哪些修改？\n3. 简历中提到剖析性能，主要使用什么工具、如何使用、重点关注哪些指标？\n4. 简历中提到三维重建，介绍技术实现过程及难点。\n5. 是否了解 MLIR 和 PyTorch 的编译过程？在研究项目中训练模型时，是否做过底层训练加速？\n6. 是否了解 CUDA 架构？\n7. 高性能模型推理框架开发中遇到过哪些难点？\n8. 反问环节：还有什么想问的？\n\n候选人反馈：面试没有问八股，关注的都是 AI Infra 相关内容。第 5～7 题回答得不好，因此向面试官询问自己从事该职业还欠缺哪些能力、需要学习什么。候选人表示一面结果不理想。\n\n# 二面\n\n一位技术面试官，面试约 15 分钟。面试官主要询问简历项目中的难点和亮点，尤其是模型推理相关内容，而非采用一问一答的形式。\n\n1. 项目中有哪些能体现个人能力的亮点？\n2. 项目中的难点是什么？如何解决？\n3. Flash Attention 的原理和实现过程是什么？\n4. 模型推理框架中编写和优化了很多算子，选择一个算子介绍其实现与优化过程。\n5. 对 GPU 架构了解多少？为什么通常在一个 block 中开启 128 或 256 个线程？\n6. C++ 的构造函数、析构函数、成员函数、模板函数中，哪些可以写成虚函数，哪些不能？为什么？\n7. 是否了解 warp 中的 bank 冲突？\n8. 反问环节：还有什么想问的？\n\n候选人反馈：二面结果不理想。\n"
  },
  {
    "id": "nowcoder-e30ca62858b840ba8d825877611a9bba",
    "category": "T5 其他",
    "company": "公司未注明",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-10-28",
    "type": "候选人面经",
    "source": "https://www.nowcoder.com/feed/main/detail/e30ca62858b840ba8d825877611a9bba",
    "tags": [
      "推理",
      "部署"
    ],
    "body": "候选人背景：简历上的项目均为 AI Agent，候选人不清楚为何进入该岗位面试。\n\n1. 自我介绍；希望从事什么方向？候选人理解为在训练和微调之间选择。\n2. 如何分析 token 成本？如何进行并发压测？并发压测通过的标准是什么？\n3. 知识库是自己构建的，还是引用已有知识库？\n4. TensorRT 部署使用什么卡、多少张？候选人表示自己缺乏集群部署经验。\n5. 介绍论文中的算法。候选人猜测面试官可能不知再问什么。\n6. 功能是否都基于 FastAPI 实现？\n7. KV Cache 的卸载方法是什么？对 KV Cache 了解多少？\n8. 本场没有手写代码。候选人猜测面试官认为没有必要。\n9. 反问：如何从 AI Agent 转向 AI Infra？\n\n候选人反馈：几轮面试下来，感觉面试官更关注实习项目的部署、验收和测试，而非理论知识。\n"
  },
  {
    "id": "xhs-69a2fbe0000000001a02d7a5",
    "category": "T0 大厂",
    "company": "字节跳动",
    "role": "AI Infra",
    "stage": "二面",
    "date": "2026-02-28",
    "type": "正文及图片已整理",
    "source": "https://www.xiaohongshu.com/explore/69a2fbe0000000001a02d7a5",
    "tags": [
      "AI Infra"
    ],
    "source_title": "ai infra字节二面面经",
    "body": "候选人反馈：二面压力较大、时间紧张，面试中还穿插了小问题。一面主要问简历，一面与二面的问题基本没有交集。候选人认为字节的面评连贯性较好，上一面不会的问题下一面可能再问，会的问题则可能不再问；建议复盘之前的面试。候选人还认为部分团队可能偏爱攻击性较强的候选人。\n\n1. 手写 linear attention。\n2. 手写 MoE。\n3. 手写 MHA。\n4. 手写 MLA。\n5. 计算以上手写内容的访存量。\n6. 手写 DeepSeek V3 结构伪代码，计算参数量和每次推理的访存量。\n7. 算法题：堆排序。\n8. 手写 reduce 并优化 reduce。\n\n候选人原文对时间的记录为“前7个30min，第8个30min”，具体含义不明确。\n"
  },
  {
    "id": "xhs-6a464a880000000008001b89",
    "category": "T0 大厂",
    "company": "字节跳动",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-07-02",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6a464a880000000008001b89",
    "tags": [
      "AI Infra"
    ],
    "source_title": "ai Infra 面经 | 字节 | 约备面 （下）",
    "body": "原帖正文（待进一步规范表达）：\n\n一面 总时长 85min\n\t\n面试官先问我在 kernel 优化方面的技能点主要点在哪个 part 是在上层针对具体场景，还是 kernel 本身，还是下层利用硬件特性\n\t\n我回答 kernel 本身，面试官表示接下来会围绕这个主题\n\t\n然后问了我项目里的优化思路\n\t\n然后就开始“头脑风暴”部分\n\t\n直接给我介绍了一个具体的推理场景（不是传统文本生成推理）然后问我在这个场景下，我能给出什么推理优化思路嘛？\n\t\n（本人瞬间卡住，一是没有很快 get 到具体场景和传统场景的差别，二是因为是速成的，还做不到临场拆解问题，给出思路）\n\t\n虽然表现糟糕，但面试官 sama 还是很耐心的引导我思考，并在反问环节给了我一些提点\n\t\n1. 每个优化 trick 都往下都问几个为什么\n2. Agent  能帮你干活，但分析问题，拆解问题，还是需要人类来把关，因为训推 profile 的成本问题，是不能像传统开发一样轻易信任 agent 然后用 TDD 之类的得到结果\n\t\n然后代码题是 CUDA or Triton 实现一个 fuse 的 norm 算子\n\t\n很感谢这次面试，准备的过程暴露了我自己很多问题（见上篇），面试本身也给了我很多视野（想想顶尖组会怎么做）\n\t\n#infra[话题]# #AIInfra[话题]# #面经[话题]# #字节跳动[话题]# #凉鞋[话题]# #来一点小小的二次元震撼[话题]# #好人面试官[话题]# #成长[话题]# #大厂[话题]# #交互的未来[话题]#\n"
  },
  {
    "id": "xhs-6ab2030c0000000031003353",
    "category": "T0 大厂",
    "company": "字节跳动",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-09-22",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6ab2030c0000000031003353",
    "tags": [
      "AI Infra"
    ],
    "source_title": "字节 ai infra 一面",
    "body": "原帖正文（待进一步规范表达）：\n\n面试官人很好，进来看到我一脸严肃就绷不住了，然后我也绷不住，这是相对来说最轻松的一次面试\n1.自我介绍\n环境不错\nxx公司的大模型发展\n为什么大家还没毕业喜欢说毕业于\n2.实习\n你是在rl中推理优化吗\n介绍一个最有趣的项目\n说一下原有架构有多烂\nall gather是聚合什么\n从哪个维度切\n通信量有减少吗\n原来完全不能overlap吗\n介绍你一下你的方法\nmask为什么导致负载不均\n这个问题是怎么解决的\n首尾切分是怎么做的\nkv cache管理这块怎么做的\n把最后一块拼到第一块会有额外通信开销 怎么权衡的\ndcp是什么 mtp是什么\n线上服务的模型batchsize开满 mtp有意义吗\n比如64batch打满 mtp推4个 prefill处理一个64*4的\ntpot全称是什么\n降低batch下增加吞吐是吗\n两个同时开为什么有问题\n为什么会让每个rank mask不一致\n你是如何解决的\n3.手撕\nurl parse 没见过，墨迹了半小时才过用例\n4.反问\n业务 训练推理都有 也有少量蒸馏 组里主要做扩散模型的\n推理优化  大组是广告垂类模型 视频换背景换衣 交付广告端\n要求  应届生了 不要对自己要求太高 放轻松能解就行\n建议 代码不流畅 讨论了一下为什么这样写\nmd.append x返回值是none 他被往里append是表达式的副作用 对于if else会不会去触发负作用 这样做不太合适 也没人这样写\n照着ai写不会这样  建议还是多刷题 项目不用太准备\nhot100有快速幂吗 还真没有\n#24h新鲜面经[话题]# #AINEXT[话题]# #互联网大厂[话题]# #大模型[话题]# #面经[话题]# #面试求职[话题]# #群面[话题]# #面试问题[话题]# #产品经理面试[话题]# #内推[话题]#\n"
  },
  {
    "id": "xhs-6aaf4f930000000029018309",
    "category": "T0 大厂",
    "company": "字节跳动",
    "role": "GPU 调度",
    "stage": "一面",
    "date": "2026-09-20",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6aaf4f930000000029018309",
    "tags": [
      "AI Infra"
    ],
    "source_title": "字节 ai infra 一面",
    "body": "原帖正文（待进一步规范表达）：\n\ngpu调度方向，hr复活的\n1.自我介绍\n2.实习\n讲一个你实习中的项目\nnpu的硬件架构\n从输入到输出对比gpu\nnpu的达芬奇架构\n如何衡量一张卡有没有用好\n利用率指标还有哪些 除了mfu\nkv cache原理是什么 解决了什么问题如何解决\n为什么是kv cache 不是q\n你这个ttft降低 是怎么衡量的\nttft有很多阶段 你优化的是哪一个\n分布式推理这一块你做了什么\n分布式训练做了什么\ngpu集群是什么样的 自己维护的吗\n断点续训如何做的 如何设计的\ncheckpoint如何保存的 做了什么优化\n训练时候的数据类型和模型并行是什么样的\n你为什么选vllm框架 有考虑过别的吗 如何取舍的\n你有做过调度相关的工作吗\n分布式系统了解吗\ncap是什么\n分布式缓存了解吗 多实例做缓存 防止把数据库打崩是吗\nredis了解吗\nmysql了解吗 到什么程度\n索引了解吗 线程进程了解吗\n常见的进程调度算法有哪些 特点分别是什么\n假如让你管理100w张卡 你会怎么做 如何拆解问题\nk8s 套一层机器学习平台 训练和推理平台 选指标衡量 比如利用率 部署率 先把卡用起来\n3.手撕\n第k大元素\n4.反问\n业务 管理字节ai算力卡\n要求 基础扎实 某些方向深入了解 考察学习能力\n建议 做好职业规划 注重深度 先深再广度 看一下和投的岗位是否匹配\n#24h新鲜面经[话题]# #AINEXT[话题]# #互联网大厂[话题]# #面经[话题]# #大模型[话题]# #面试求职[话题]# #群面[话题]# #面试问题[话题]# #产品经理面试[话题]# #内推[话题]#\n"
  },
  {
    "id": "xhs-6ae9a64d0000000016005888",
    "category": "T0 大厂",
    "company": "字节跳动",
    "role": "AI Infra",
    "stage": "三面",
    "date": "2026-11-03",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6ae9a64d0000000016005888",
    "tags": [
      "AI Infra"
    ],
    "source_title": "字节ai infra 三面",
    "body": "原帖正文（待进一步规范表达）：\n\n* MoE EP、去重、overlap？\n\t\n* DiT/AR 与 Ulysses/Ring？\n* DiT 反复扩散、序列长；AR 分 Prefill/Decode，涉及 KV Cache 与调度\n* Ulysses 用 All-to-All 重排 sequence/head；Ring 沿设备环传 KV\n\t\n* Linear Attention 在 Prefill 和 Decode 中怎样执行？\n* Hybrid 模型通常混合 full attention 与 linear attention，不是所有层都没有 KV Cache\n* Prefill 在 chunk 内并行、chunk 间传播 state；Decode 每 token 做 streaming update\n* 瓶颈转向 state/HBM 读写、归约、gating 的 SFU 开销和 small-batch launch\n\t\n* LLM batching 与调度分别优化什么？\n* continuous batching 动态进出；chunked prefill 切长 Prefill；token budget 控制每轮计算\n* TTFT 看首 token，TPOT/ITL 看 token 间隔；区分 token/s、request/s 和 goodput\n\t\n* 手撕：N 很大的 1D Softmax，怎样写？\n* 类似于reduce一个非常大的N（两个kernel版本）\n需要3个kernel，先小块做得到局部m和l，再用一个kernel把m和l合并，最后一个kernel根据m和l得到softmax结果\nkernel1:先分小块做单独的softmax（online或者其他都行\nkernl2: 一个block合并之前小block的m和l\nkernel3: 根据最终的m和l得到softmax结果\n\t\nllm调度那块没有答好，答得有点乱，手撕撕的还好。3工作日后约hr面，然后hr面后横向挂。\n"
  },
  {
    "id": "xhs-6ac65d920000000018004d3c",
    "category": "T0 大厂",
    "company": "字节跳动",
    "role": "AI Infra",
    "stage": "三面",
    "date": "2026-10-07",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6ac65d920000000018004d3c",
    "tags": [
      "AI Infra"
    ],
    "source_title": "字节 AI INFRA 三面复盘",
    "body": "原帖正文（待进一步规范表达）：\n\n这轮主要围绕实习经历和项目展开。开场先确认我在过去的团队里负责什么、工作交付给谁，以及 TensorFlow 算子适配面向什么场景。\n\t\n技术部分先聊了 CUDA Graph 和 TP 同时开启时的卡死问题：\n为什么关闭 Graph，或者把 TP 降到 1，问题就消失；\n怎么逐步缩小到融合通信算子；\n通信状态标记放在哪里，为什么使用浮点数；\n修复后怎样通过最小复现和模型级回归验证。\n这里被追问得比较细。定位到某个判断出错后，还要能解释原来的同步机制为什么这样设计。\n之后聊了开发工具选择：为什么现在更多使用 Triton 和 CuTe DSL。我主要从算法协作、可读性、开发效率，以及当前优化需求来解释。\n\t\n接着是 Router Replay：\nrollout 记录的 token、layer、Top-K 信息给谁用；\n训练侧在哪一步消费这些路由；\n这是论文复现，还是实际训练中也遇到了问题；\n一个 token 进入 MoE 后，完整前向流程是什么；\nEP 通信有没有实际接触过。\nMoE 前向这段我没有讲顺，EP 通信也还缺工程经验。对局部代码比较熟，完整数据流还是需要重新梳理。\n\t\n后面介绍了一个滑动窗口 Attention 的确定性反向优化。重点是 dQ 累加中的等待：怎样缩小同步范围、调整执行顺序，并让独立计算链并行起来。面试官继续追问，这样改之后如何保证累加顺序和确定性。\n最后聊了国产 GPU 上的算子 benchmark，包括不同 shape、batch、dtype，以及自写 kernel、高性能库和旧实现之间的对比。也问到了硬件结构、显存带宽和卡间互联。\n\t\n我也问了改进建议。反馈是实习工作比较扎实，但部分 GPU 硬件表述不准确，需要查规格；通信基础也建议继续补。\n这场最大的提醒是：项目里的局部问题要讲清楚，模型数据流、硬件规格和通信基础也要接得上。后面会重点补 MoE 前向、EP 通信，以及确定性计算里的同步和累加顺序。\n\t\n欢迎准备 AI Infra、GPU 算子和训练推理系统的同学交流\n#AIInfra[话题]# #27届秋招[话题]# #面试复盘[话题]# #字节跳动[话题]#\n#面试复盘[话题]# # #谁AI上班[话题]#\n"
  },
  {
    "id": "xhs-6a4239b2000000000803e322",
    "category": "T0 大厂",
    "company": "腾讯",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-06-29",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6a4239b2000000000803e322",
    "tags": [
      "AI Infra"
    ],
    "source_title": "腾讯infra一面面经",
    "body": "原帖正文（待进一步规范表达）：\n\n最近面了不少中厂和大厂，腾讯和字节的面试难度断档地高。\n整体45min，实习经历+八股30min，手撕10min，反问5min。面试官比较喜欢质疑，记录一些关键问题：\n1.用单卡做的工作还是多卡，多卡时有考虑ep并行的头拆分问题吗\n2.质疑：把异步改为同步，没有什么性能下降？解释：瓶颈不在数据传输，在计算那边\n3.vllm怎么进行异步调度？（字节同款问题，又忘了，想扇自己几巴掌）胡乱答了一下，面试官：我觉得你理解偏差比较大，回去再看一下[偷笑R]\n4.投机解码的接收策略，具体公式是什么（忘了）\n5.投机解码具体解决什么问题（我：大模型前向传播太慢）面试官：具体细节呢\n6.moe架构的运行过程，张量维度怎么变化的\n7.moe并行过程中，怎么进行通信，有几种通信方式\n8.continue batching，dynamic batching，steady batching，persistent batching了解吗\n手撕hot100mid原题，库函数编译器报错，讲了一下思路算过了\n\t\n#腾讯[话题]# #teg[话题]# #infra[话题]# #混元[话题]# #一面面经[话题]# #手撕代码[话题]#\n"
  },
  {
    "id": "xhs-6ac9adf1000000001500368b",
    "category": "T0 大厂",
    "company": "腾讯",
    "role": "混元 · 多模态推理",
    "stage": "二面",
    "date": "2026-10-10",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6ac9adf1000000001500368b",
    "tags": [
      "AI Infra"
    ],
    "source_title": "腾讯混元ai infra 二面（1）",
    "body": "注意：原帖标题标注“（1）”，正文末尾注明字数限制，本帖内容可能有后续。\n\n原帖正文（待进一步规范表达）：\n\n已吓哭\n1.自我介绍\n2.面试官介绍\n混元的多模态推理团队 大语言也做 hy34这些 做图像生成视频生成3d语音\n方向包括框架 算子 后台 加速算法\n3.论文\n没看到paper相关的 是没写吗\n4.实习\nvllm ascend用的什么卡型\n910c多少显存 两卡合在一起用吗\n长序列是多长的 什么模型 attention什么结构\ndsv3.1除了mla 还有nsa吗 只有mla不合理吧\n长序列中kvcache占用过高 怎么理解\nallgather峰值显存很高 有多高\n你这个场景 slo的ttft上限是多少\nprefill推理bs多少 chunksize多少 prefixcache命中率是多少\n一个session内 有没有考虑过多轮请求的情况\n如何管理多轮对话的kv\n有这样的能力吗 当时开了吗 只有gpu是吧\n单轮推理完后每rank部分还是全量kv 指的是prefill没有decode\n对输入的长序列全量计算 没有prefix 没有多轮对话管理 这不是一个工业场景\n需要去思考一下高prefix命中率 通信尽可能少是如何做的\nring attention你是怎么做的\n通算overlap是在python维度吗 双流吗 有没有更好的方式\n短序列 q len小的时候 通信大计算小 怎么做\n你这场景是你的舒适区 没有更极致的优化 你做的类似于视频生成 但线上不是这样\n你说的tp开小 解决不了kv显存占用高的问题\n是同时开tp和cp 减少cp group size吗\n你的本质是什么 怎么理解\n减小tp是通信量降低了吗 大概多少\n指的是kv的通信 减少tp和kv通信什么关系\n你说的ttft优化的角度 怎么做怎么做 详细讲一下\n8卡baseline如何 tp和pcp互斥吗\ntp切的是什么 哪些投影矩阵的权重 kv的投影矩阵也切了吗 不是一个头吗怎么切tp\n减少tp是怎么增加通信量 降低计算量的\n你这个mla是吸收吗 还是非吸收的 为什么非吸收的\n吸收有什么问题什么好处\n没有吸收kv有head吗\n问懵了是吧，kv这块做的离工业场景远了点\n相比ring attention 业界有什么更好的方案吗\n你的就是python 双流 有更极致的优化吗 比如算子\n通算能融合在一个算子里吗\nkv通算这一块还有了解别的技术吗 不是python层面的\nflux知道吗 怎么做的\n（字数限制..）\n"
  },
  {
    "id": "xhs-6a66188b000000000401f0f2",
    "category": "T0 大厂",
    "company": "腾讯",
    "role": "混元 AI Infra",
    "stage": "面试记录",
    "date": "2026-07-26",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6a66188b000000000401f0f2",
    "tags": [
      "AI Infra"
    ],
    "source_title": "腾讯混元Ai infra",
    "body": "原帖正文（待进一步规范表达）：\n\n腾讯混元Ai infra.\n1.自我介绍\n2.详细问了vllm 相关的东西，如果想去做推理方向的话，把vllm吃透就行了（我其实对vllm懂得不是很深，只是对一些关键技术有了解）\n3.拷打实习，RL训练的性能优化，一些算子问题（问了cuda，但是主包不太会，还是多学习这方面知识，如果大家想偏低层一些的话cuda还是要会的，虽然算子用triton 和tilelang 就可以写。）\n4.Megatron先说原理，各种并行，然后介绍实际项目中如何考虑各种并行度的选择\n4.聊了一些专业相关，主包非科班转码，被拷打了，面试官问约了多久\n无手撕，主要是做推理方向的vllm的二开其实不是很match，虽然问题很少但是问了很多相关的，大家感兴趣的话，可以做相关准备，给大家一个参考#大厂[话题]# #ai[话题]# #大模型[话题]# #算法[话题]# #实习[话题]# #腾讯[话题]# #混元[话题]##大模型[话题]# #工作[话题]# #学习[话题]#\n"
  },
  {
    "id": "xhs-6ac38391000000001b01e2e5",
    "category": "T0 大厂",
    "company": "腾讯",
    "role": "混元 AI Infra",
    "stage": "一面",
    "date": "2026-10-05",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6ac38391000000001b01e2e5",
    "tags": [
      "AI Infra"
    ],
    "source_title": "腾讯混元AI infra部门一面",
    "body": "原帖正文（待进一步规范表达）：\n\n1. Tensor Parallel\nTP 怎么切 Linear / Attention / FFN？Column Parallel 与 Row Parallel 分别怎么切，通信发生在哪里？\n\t\n合并追问：\n- Column Parallel 切输入维还是输出维？\n- Row Parallel 怎么切？\n- QKV 怎么做 TP？\n- Attention Head 怎么切？\n- FFN 两层怎么组合切分？\n- 为什么经常采用 Column Parallel + Row Parallel？\n- TP Size 越大是否一定越快？\n2. 集合通信\nTP 中为什么需要 All-Reduce / Reduce-Scatter / All-Gather？具体通信量怎么计算？\n\t\n包括：\n- 给定 Tensor Shape，通信多少 Byte？\n- TP=2 与 TP=4 有什么变化？\n- 通信量与 Batch、Sequence Length、Hidden Size 的关系是什么？\n- 怎么判断已经进入 Communication Bound？\n3. DP\nDP 和 TP 到底有什么区别？什么时候应该增加 DP 而不是 TP？\n\t\n包括：\n- DP 是否复制完整模型？\n- 为什么 DP 提升吞吐？\n- DP 是否降低单请求延迟？\n- 单卡放不下模型时 DP 能解决吗？\n- Serving DP 和训练 DP 有什么不同？\n4. Pipeline Parallel\nPP 如何切模型，为什么真正实现起来很复杂？\n\t\n包括：\n- Stage 怎么划分？\n- Micro-Batch 是什么？\n- Pipeline Bubble 怎么产生？\n- 如何减少 Bubble？\n- Stage 不均衡怎么办？\n- 为什么 PP 会增加 Latency？\n- 是否真正实现过 PP？\n5. Context Parallel\nCP 为什么适合长 Context？把 Sequence 切开以后 Attention 如何进行跨 GPU 计算？\n\t\n6. AI 实战编码考核\n- 考核内容：完成 QQ 空间好友动态推荐功能开发，覆盖动态数据管理、行为仿真、评分排序、TopN 推荐全流程。\n#面经[话题]# #大模型[话题]#\n"
  },
  {
    "id": "xhs-6ac3a198000000001b0313c8",
    "category": "T0 大厂",
    "company": "腾讯",
    "role": "混元 · 推理优化",
    "stage": "二面",
    "date": "2026-10-05",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6ac3a198000000001b0313c8",
    "tags": [
      "AI Infra"
    ],
    "source_title": "腾讯AI infra部门二面",
    "body": "原帖正文（待进一步规范表达）：\n\n腾讯混元 AI\n岗位：混元 AI 推理团队 —— 大模型推理优化方向。\n面试官为负责 KV Cache 与调度的 leader，面试集中在大模型推理系统方向：\n自我介绍及 AI Infra 项目、论文成果\n安培→Hopper→Blackwell 三代指令集变化（TMA、Tensor Memory、异步调度、FP4/FP6）\nHopper WGMMA 需 Warp Group 发射，Blackwell UMMA 为何只需单 Warp；Tensor Memory 上如何应用 scale factor\nCache-aware 路由中热点实例问题：cache score+load score 方案、lambda 确定、命中率影响、跨实例 KV Cache 共享、与 Dynamo 已有策略的差异\n英特尔 TILE cache 仿真（为客户提供并行配置与 PD 配比参考）及系统层级\nW4A4 稀疏 kernel：WMMA 指令、量化方案、4 Tile 对应 1 Bitmap 创新、split key/double buffer/LSBD pipeline、M16N8K64、应用场景\n笔试二选一：手写 Save Softmax 及优化点（Warp Shuffle 归约、寄存器暂存减访存）\n反问：团队业务、技术难点、人均 GPU、调度 / 框架 / 算子分团队\n#面试[话题]# #大厂[话题]# #面试问题[话题]# #大模型[话题]# #互联网[话题]#\n"
  },
  {
    "id": "xhs-6a6efa530000000028005c8c",
    "category": "T0 大厂",
    "company": "腾讯",
    "role": "游戏 · 训练框架",
    "stage": "一面",
    "date": "2026-08-02",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6a6efa530000000028005c8c",
    "tags": [
      "AI Infra"
    ],
    "source_title": "腾讯游戏 ai infra 训练框架一面",
    "body": "原帖正文（待进一步规范表达）：\n\n整体面试感觉面试官有点不感兴趣，整体问题也不深不难\n后面一问他们是做强化学习的，最后也顺理成章地把我挂了，以下是正文：\n- [ ] 项目模型 mfu是多少？\n- [ ] 所用框架的并行方式都支持吗？\n- [ ] 问了 ddp和zero有什么区别\n- [ ] 项目细节 xxx，如何\n- [ ] 项目只是框架适配吗？还是有具体的功能开发\n- [ ] 芯片适配问题，挑一个讲\n- [ ] pin memory 具体是怎么通信的，有几个进程（这个没答上）\n- [ ] cpu 内部通过队列 queue 通信\n- [ ] Tp和pp的使用场景？\n- [ ] 做过强化学习吗？（我说没有，只是了解）\n- [ ] mha gqa mqa有什么区别\n- [ ] 代码：写一个gqa的实现\n#大模型[话题]# #腾讯游戏[话题]# #aiinfra[话题]# #转码[话题]#\n"
  },
  {
    "id": "xhs-696b0d9d000000000e00ecf9",
    "category": "T0 大厂",
    "company": "阿里巴巴",
    "role": "阿里国际 · AI Infra",
    "stage": "面试记录",
    "date": "2026-01-17",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/696b0d9d000000000e00ecf9",
    "tags": [
      "AI Infra"
    ],
    "source_title": "阿里国际ai infra面（凉）经",
    "body": "原帖正文（待进一步规范表达）：\n\n由于是整个12月的第一场面试，可能也算本人第一次面大厂，很多基本的八股都不懂，好在面试官人很好，应该看出来了我是个新人，最后给我提了很多学习上的建议，当然也是不出意外挂了\n\t\n1.15min自我介绍\n2.针对项目提问\n3.FlashAttention原理，Online softmax，有没有看过cuda kernel，FlashAttention V1,V2,V3，FlashDecoding原理\n4.推理优化的思路（方法）有哪些\n5.用没用过vllm/SGLang，原理\n6.有没有听说过Dynamic Batching\n7.\nCoding：写一个ruduce，用block，优化版：用warp shuffle，能不能再优化？（不会了）\n8.加载到shared memory和直接从HBM取input比为什么更快（取得数组里面数的数目都是一样的）\n9.有没有听说过shared memory的bank conflict\n10.反问：在哪些地方可以继续提升自己\n#阿里国际[话题]# #面经[话题]#\n"
  },
  {
    "id": "xhs-6a9c3de3000000002502ecf9",
    "category": "T0 大厂",
    "company": "阿里巴巴",
    "role": "AI Infra",
    "stage": "二面",
    "date": "2026-09-06",
    "type": "图片待核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6a9c3de3000000002502ecf9",
    "tags": [
      "AI Infra"
    ],
    "source_title": "阿里 ai infra 二面复盘",
    "body": "注意：原帖图片暂未完成核对，可能包含正文以外的问题。\n\n原帖正文（待进一步规范表达）：\n\n开场先是数据结构和网络原理热身：\n\t\n链表、二叉树、哈希表的复杂度和使用场景；\n几千到几万个定时器该如何管理，堆的插入、触发复杂度；\nTCP / UDP 的区别、三次握手；\n多台机器共用交换机时，TCP 和 UDP 在不同数据规模下的实际表现。\n\t\n这部分让我很清醒：AI Infra 不会因为你做过 CUDA，就不问基础。尤其是计网、数据结构这些，得能真的顺着场景往下推，而不是只记几个结论。\n\t\n项目部分主要深挖了四块：\nTP + CUDA Graph 场景下的稳定性排查。 从大规模超时开始，先缩到 TP=2 的最小复现，再对比 TP=1 / TP>1，最后把范围收敛到一条融合通信路径的状态同步问题。面试官会继续问：Graph 是触发条件还是根因？通信双方怎么判断 buffer 状态？为什么默认路径没复现？\n\t\n确定性 Router GEMM。 会问为什么 Split-K 会影响确定性、为什么固定配置的 persistent kernel 在小 M 下浪费严重，以及如何根据 shape 选更合适的路径，同时保留回退方案。\n\t\nDecode 侧减少 CPU/GPU 同步等待的融合算子。 重点是原先的数据为什么要来回经过 CPU，哪些计算可以留在 GPU 上完成，怎样减少 decode 中反复出现的空隙。\n\t\nNCCL 与推理系统设计。 Ring / Tree All-Reduce 怎么工作、各自偏吞吐还是延迟；如果做多节点 Prefill / Decode 分离，Prefill 产生的 KV Cache 怎么给 Decode 节点，通信方式和缓存复用该怎么权衡。\n\t\n这场最大的收获是：以后讲项目不能只停在“我定位并修了一个 bug”。要能完整讲出：\n触发条件 → 最小复现 → 排查假设 → 根因范围 → 修复边界 → 正确性与回归验证。\n#AIInfra[话题]# #27届秋招[话题]# #面试复盘[话题]# #阿里[话题]#\n"
  },
  {
    "id": "xhs-6aa3ff60000000002901aab6",
    "category": "T0 大厂",
    "company": "阿里巴巴",
    "role": "阿里妈妈 · Infra",
    "stage": "一面",
    "date": "2026-09-11",
    "type": "图片待核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6aa3ff60000000002901aab6",
    "tags": [
      "AI Infra"
    ],
    "source_title": "阿里妈妈ai infra一面",
    "body": "注意：原帖图片暂未完成核对，可能包含正文以外的问题。\n\n原帖正文（待进一步规范表达）：\n\n阿里妈妈 Infra 一面。整体主要聊项目，基本没怎么问八股。\n\t\n有个比较尴尬的点：面试官刚好是做世界模型 / VAE 并行的，而我之前 的 VAE 并行直接做了 spatial 切分，没有上 halo exchange 这种无损方案，正好撞到人家专业领域了，被追着问了一下😂 感觉简历里这部分可能还得重新斟酌下表述。\n\t\n手撕两道：一道 CUDA Online Softmax，这个还算正常；另一道直接给我上了个顶级智力题，据说还是 AI 出的，我是真服了。大概是：100 张 GPU 对应 100 个随机打乱的任务，每张卡最多只能沿着任务给出的编号找 50 次，要求设计一种策略，让所有 GPU 都找到自己的任务，并分析成功概率。\n\t\n本质上是随机排列的置换环 / cycle decomposition问题，属于经典 100 prisoners problem 的变体。面试的时候突然来这么一道，多少有点猝不及防。\n\t\n智力题：100 个 GPU 找任务包\n\t\n有 100 个 GPU，编号为 0 ~ 99。同时有 100 个任务包，每个任务包上标有一个 GPU 编号，并且 0 ~ 99 每个编号恰好出现一次。\n\t\n这 100 个任务包被随机放到 100 个 GPU 上，每个 GPU 上恰好放一个，因此任务包的位置实际上构成了一个随机排列。\n\t\n对于 GPU i，它的目标是找到编号为 i 的任务包。\n\t\n每个 GPU 最开始从自己的位置出发。它每查看一个位置，就能看到该位置任务包上的编号，并据此决定下一步去查看哪个 GPU 上的任务包。每个 GPU 最多只能查看 50 个位置。\n\t\n所有 GPU 可以提前约定同一种策略，但搜索过程中不能互相通信，也不知道其他 GPU 查到了什么。\n\t\n问：\n\t\n1. 是否存在一种策略，使得“100 个 GPU 全部在 50 次以内找到自己的任务包”的概率，远高于每个 GPU 随机选择 50 个位置？\n2. 如果有，这个策略是什么？\n3. 整体成功概率大约是多少？\n"
  },
  {
    "id": "xhs-6ad99bac000000002c010b80",
    "category": "T0 大厂",
    "company": "阿里巴巴",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-10-22",
    "type": "图片待核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6ad99bac000000002c010b80",
    "tags": [
      "AI Infra"
    ],
    "source_title": "阿里巴巴 ai infra 一面面经（总结扩展版）",
    "body": "注意：原帖图片暂未完成核对，可能包含正文以外的问题。\n\n原帖正文（待进一步规范表达）：\n\n1️⃣ MoE 投机解码： 为什么 MoE 模型做 Speculative Decoding 时，加速收益不能像 Dense Model 一样随着一次 Verify 的 Token 数增加而近似线性提升？\n2️⃣ FP8 → FP4 量化： FP8 转 FP4 的完整量化流程是什么？具体应该怎么做？\n3️⃣ MXFP8 格式： MXFP8 能表示的数值范围是多少？精度如何？与 MXFP4、FP16/BF16 有什么区别？\n4️⃣ Scale 与 Weight 对齐： 针对 MXFP4 量化中 Scale 与 Weight 的分片对齐问题，如果不受现有实现限制，还可以从哪些角度设计解决方案？\n5️⃣ KV Cache 与 L2 Cache： 如果将 KV Cache 放到 HBM 以外的其他介质中，还需要关注 L2 Cache 吗？应该从哪些方面进行优化？\n6️⃣ 硬件选型与性能对比： 为什么选择 NVIDIA H20 与华为昇腾 A5 进行性能对比，而不是选择其他 GPU 或 AI 加速卡？\n7️⃣ 手撕算法题（二选一）：\n- 手撕 MoE：实现 MoE 的核心计算流程，包括 Router、Top-K Expert 选择、Expert 计算与结果合并。\n- 二叉树后序遍历：非递归实现二叉树后序遍历\n\t\n前面的问题我都还算是能回答得上来，手撕moe这道题一出我就破防了[捂脸R][捂脸R]，谁能撕出来哇\n#秋招[话题]# #面经[话题]# #阿里巴巴[话题]# #互联网大厂[话题]#\n"
  },
  {
    "id": "xhs-6a30c6f20000000020039533",
    "category": "T0 大厂",
    "company": "百度",
    "role": "Infra",
    "stage": "一面 / 二面",
    "date": "2026-06-16",
    "type": "图片待核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6a30c6f20000000020039533",
    "tags": [
      "AI Infra"
    ],
    "source_title": "百度infra一二面面经",
    "body": "注意：原帖图片暂未完成核对，可能包含正文以外的问题。\n\n原帖正文（待进一步规范表达）：\n\nbg双9本硕，28届研一，一段小厂infra实习，无论文。\n面试官很和蔼，态度非常好，深挖了实习经历，简略问了项目经历，问了一些基础八股，大部分都答上来了，但是编程语言八股和手撕答的不好。\n整体时间75min，简历+八股45min，手撕25min，反问5min。\n记录一些答的不好的问题：\n1.prefix cache融合算子融合了哪些\n2.了解DSA吗（这个看过但是忘了）\n3.vllm支持哪种投机解码\n4.看过trition算子吗（没看过）\n5.算子访存效率，计算能到多满，怎么评估\n6.std forward，move，enable if各有什么作用\n7.python的全局解释器锁是什么？\n8.rope编码相对于传统位置编码的优点？\n手撕力扣非hot100mid\n\t\n二面大概40min，无八股无手撕，主要针对简历的提问，有看代码回答问题环节。\n面试完到口头offer隔了一周，都以为挂了，可能横向的时间比较长[捂脸R]\n\t\n总结百度这两面，感觉实习和八股能力是基本达标的，但是代码能力还有差距。虽然ai时代很少手写代码了，但是代码能力作为重要的筛选标准，大厂面试还是经常出现，想去大厂手撕还是基本能力。infra这边代码能力要求一般比算法更高，且以C++为主。\n\t\n#互联网大厂[话题]# #百度[话题]# #昆仑芯[话题]# #infra[话题]# #面经[话题]# #一面[话题]# #二面[话题]#\n"
  },
  {
    "id": "xhs-6a700d7400000000350155ba",
    "category": "T0 大厂",
    "company": "百度",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-08-03",
    "type": "图片待核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6a700d7400000000350155ba",
    "tags": [
      "AI Infra"
    ],
    "source_title": "百度ai infra一面",
    "body": "注意：原帖图片暂未完成核对，可能包含正文以外的问题。\n\n原帖正文（待进一步规范表达）：\n\n1.自我介绍\n2.实习\n介绍vllm ascend相关工作\n解释ring attention原理\n多长的文本是长文本\ndsv3.2支持多长文本的推理\nring attention通信点在哪 通信形式干成什么样了\nisend ireceive是tcp还是什么\ncpp是怎么做的 优化的是负载均衡吗 有什么数据吗\n收益是整个算完吗 还是某一部分的\ndcp的方案是什么\ndecode阶段计算强度不大 为什么还要做cp\n为什么不做ring attention\n异构mask是什么异构\n讲讲kvcache管理 是什么样设计模式\n如何测精度的\n是不是就是后端的几个memory统一管理了一下 由一个router\n会影响三级缓存吗\nlayout既影响三级缓存又影响pd分离 对于一个pd分离场景需要做哪些修改\n3.手撕\n二分查找\n4.反问\n问建议 没什么建议，挺好的 然后秒挂\n"
  },
  {
    "id": "xhs-6a92ecb70000000007004c9a",
    "category": "T0 大厂",
    "company": "百度",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-08-29",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6a92ecb70000000007004c9a",
    "tags": [
      "AI Infra"
    ],
    "source_title": "百度 ai infra 一面复盘",
    "body": "原帖正文（待进一步规范表达）：\n\n这场不算单纯的算子面。开头从项目切入，后面不断往推理框架、CUDA Graph、确定性计算、量化和 RL Infra 延伸，整体更像在验证：项目是不是自己做过，底层链路能不能讲清楚。\n\t\n主要被问了这些：\n\t\nMoE Router Replay 到底怎么接进 RL 流程。 不只问“为什么能降低推训不一致”，还会追 rollout 端的 Top-K 路由信息怎么记录、怎么随数据传给训练侧、CPU/GPU 之间如何搬运。\n\t\nvLLM 的整体结构。 从请求进来，到 scheduler、engine、worker、model runner，再到下层算子和通信，数据流、控制流分别怎么走。\n\t\nTP + CUDA Graph 的卡死问题。 会问怎么从大规模问题缩到 TP=1 / TP>1 的对比，为什么 Graph 只是触发条件，真正的问题可能出在被替换的融合通信路径；还会继续问 capture / replay 的约束，例如 kernel、shape、地址等哪些必须稳定。\n\t\n确定性 Router GEMM。 为什么 Split-K 会导致结果不完全一致，固定配置为什么会在 Decode 的小 M 场景浪费资源，动态选配置和回退路径如何设计。\n\t\nDecode 侧的融合算子、量化和模型结构。 包括 CPU/GPU 来回同步怎么减少、W4A16 / AWQ / QAT、MHA / GQA，以及 RL 框架本身的理解。\n\t\n这场最直接的收获是：项目结果能讲，不代表项目就能扛住深挖。\n\t\n后面我最该补的其实就三件事：\n\t\n把 vLLM 从请求到 kernel 的全链路重新走一遍；\n把 CUDA Graph 的捕获、显存和 replay 约束讲清楚；\n把量化、Attention 和 Router GEMM 的收益拆开，不再把多个优化的总结果混成一个数字。\n#面经[话题]# #百度[话题]# #aiinfra[话题]# #AIInfra[话题]# #27届秋招[话题]# #面试复盘[话题]#\n"
  },
  {
    "id": "xhs-6abf5b2f0000000015011d00",
    "category": "T0 大厂",
    "company": "百度",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-10-02",
    "type": "图片已核对，正文待规范",
    "source": "https://www.xiaohongshu.com/explore/6abf5b2f0000000015011d00",
    "tags": [
      "AI Infra"
    ],
    "source_title": "百度ai infra一面",
    "body": "原帖正文（待进一步规范表达）：\n\n* DiT / 视频生成和 LLM 推理的优化重点有什么区别？\n* DiT 更像超长 Prefill，长 sequence + 多 step，重点偏计算 / Attention 优化\n* LLM 还有 Decode，涉及 KV Cache，调度等更多系统问题\n* TP / SP / CP / EP 分别怎么切，通信开销是什么？\n* TP：tp / tpsp\n* Ulysses SP：核心是 All-to-All，通信少\n* Ring CP：KV 分片并沿 Ring 通信\n* EP：核心是 dispatch / combine\n* Prefill CP 和 Decode CP 有什么区别？\n* Prefill：可以 Ring 传 KV，边通信边计算\n* Decode：历史 KV 很大，更适合保持 KV 分片、通信小得多的 Q\n* Prefill / Decode 的特点和优化方向？\n* Prefill：偏 compute-bound\n* Decode：偏 memory-bound，重点包括KV Cache、调度等\n* PagedAttention 解决什么问题？\n* KV Cache 分页管理，减少内存碎\n* Prefix Cache 是什么？\n* 命中相同 prefix 时复用已有 KV Cache，减少重复 Prefill 计算\n* 量化的收益有哪些？\n* 提高 Tensor Core 计算吞吐\n* 减少 memory traffic\n* 降低显存占用，从而支持更长 context / 更大 batch\n* NVFP4 / MXFP4 / block-wise FP8 有什么区别？\n* 主要关注数据格式、group size / block size、scale 格式和两级量化\n* Roofline Model 怎么分析 Kernel？\n* Arithmetic Intensity 对比硬件 ridge point，判断 memory-bound / compute-bound\n* HBM / Shared Memory 访存分别要注意什么？\n"
  }
];
