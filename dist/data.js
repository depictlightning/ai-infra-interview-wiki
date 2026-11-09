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
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/6a464a880000000008001b89",
    "tags": [
      "AI Infra"
    ],
    "source_title": "ai Infra 面经 | 字节 | 约备面 （下）",
    "body": "一面，总时长约 85 分钟。\n\n1. 在 kernel 优化方面，主要擅长针对具体场景的上层优化、kernel 本身的优化，还是利用硬件特性的下层优化？\n   - 候选人回答：主要是 kernel 本身。面试官表示后续将围绕这一主题展开。\n2. 介绍项目中的优化思路。\n3. 针对一个具体的推理场景（不是传统文本生成推理），提出推理优化思路。\n   - 候选人反馈：没有迅速理解该场景与传统场景的差异，也因准备时间较短，暂时无法现场拆解问题并提出思路。\n4. 编程：使用 CUDA 或 Triton 实现一个 fused norm 算子。\n\n面试官在候选人回答不佳时耐心引导，并在反问环节给出建议：\n1. 对每个优化技巧多追问几个“为什么”。\n2. Agent 可以辅助工作，但分析和拆解问题仍需人把关。由于训练和推理 profiling 的成本，不能像传统开发一样轻易信任 Agent，再通过 TDD 等方法获得结果。\n\n候选人反馈：准备过程暴露了自身问题，面试也拓宽了视野，并引发了对顶尖团队做法的思考。\n"
  },
  {
    "id": "xhs-6ab2030c0000000031003353",
    "category": "T0 大厂",
    "company": "字节跳动",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-09-22",
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/6ab2030c0000000031003353",
    "tags": [
      "AI Infra"
    ],
    "source_title": "字节 ai infra 一面",
    "body": "候选人反馈：面试官态度友好，双方一开始因候选人的严肃表情而笑场，是候选人经历过较轻松的一次面试。\n\n1. 自我介绍。交流了面试环境、某公司的大模型发展，以及尚未毕业时使用“毕业于”的说法。\n2. 实习项目：是否在 RL 中进行推理优化？介绍一个最有趣的项目及原有架构的问题。\n3. All Gather 聚合什么？从哪个维度切分？通信量是否减少？原来是否完全无法 overlap？介绍自己的方法。\n4. 为什么 mask 会导致负载不均？如何解决？首尾切分如何实现？KV Cache 如何管理？将最后一块拼到第一块会增加通信开销，如何权衡？\n5. DCP 和 MTP 分别是什么？线上服务的 batch size 已满时，MTP 是否有意义？例如 batch 为 64、MTP 推 4 个 token，Prefill 处理一个 64×4 的输入。TPOT 的全称是什么？是否是在降低 batch 的情况下增加吞吐？\n6. 两个功能同时开启为什么会出现问题？为什么各 rank 的 mask 会不一致？如何解决？\n7. 编程：URL parse。候选人此前没有见过该题，约半小时后通过用例。\n8. 反问团队业务和岗位要求。\n\n面试官介绍：团队同时涉及训练、推理和少量蒸馏，主要做扩散模型推理优化；大组负责广告垂类模型，如视频换背景、换衣服并交付广告端。面试官建议应届生放松，不必对自己要求过高，能解决问题即可。\n\n面试官反馈：候选人代码不够流畅，双方讨论了写法，例如 `md.append(x)` 返回 None、向内部 append 是表达式的副作用，以及 if / else 是否会触发副作用；面试官认为这种写法不太合适，也不常见，按 AI 生成代码写通常不会如此。建议多刷题，项目不必准备太多。双方还讨论了 Hot 100 是否包含快速幂，发现没有。\n"
  },
  {
    "id": "xhs-6aaf4f930000000029018309",
    "category": "T0 大厂",
    "company": "字节跳动",
    "role": "GPU 调度",
    "stage": "一面",
    "date": "2026-09-20",
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/6aaf4f930000000029018309",
    "tags": [
      "AI Infra"
    ],
    "source_title": "字节 ai infra 一面",
    "body": "岗位方向：GPU 调度。候选人称由 HR 重新推进流程。\n\n1. 自我介绍，介绍一个实习项目。\n2. NPU 的硬件架构是什么？从输入到输出如何与 GPU 对比？介绍 NPU 的达芬奇架构。\n3. 如何衡量一张卡是否得到充分利用？除 MFU 外还有哪些利用率指标？\n4. KV Cache 的原理是什么？解决了什么问题、如何解决？为什么缓存 K 和 V，而不是 Q？\n5. TTFT 的降低如何衡量？TTFT 包含多个阶段，优化的是哪一个？\n6. 分布式推理和分布式训练分别做过什么？GPU 集群是什么样的，是否由自己维护？\n7. 断点续训如何实现和设计？Checkpoint 如何保存，做了哪些优化？训练时的数据类型和模型并行配置是什么样的？\n8. 为什么选择 vLLM？是否考虑过其他框架，如何取舍？是否做过调度相关工作？\n9. 是否了解分布式系统？CAP 是什么？是否了解分布式缓存？多实例使用缓存是否是为了防止数据库被打崩？\n10. 是否了解 Redis 和 MySQL，了解程度如何？是否了解索引、线程和进程？常见进程调度算法有哪些，各有什么特点？\n11. 假设需要管理 100 万张卡，会如何拆解和解决问题？\n   - 候选人记录：使用 K8s，并在其上构建机器学习训练和推理平台；选择利用率、部署率等指标衡量，先让卡得到利用。\n12. 编程：第 K 大元素。\n13. 反问：业务负责管理字节的 AI 算力卡；岗位要求基础扎实，在某些方向有深入理解，并考察学习能力。面试官建议做好职业规划，注重深度，先深后广，并考虑与投递岗位的匹配程度。\n"
  },
  {
    "id": "xhs-6ae9a64d0000000016005888",
    "category": "T0 大厂",
    "company": "字节跳动",
    "role": "AI Infra",
    "stage": "三面",
    "date": "2026-11-03",
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/6ae9a64d0000000016005888",
    "tags": [
      "AI Infra"
    ],
    "source_title": "字节ai infra 三面",
    "body": "1. MoE 的 EP、去重和 overlap 如何理解？\n2. DiT / AR 与 Ulysses / Ring 有什么关系或区别？\n   - 候选人记录：DiT 反复扩散、序列较长；AR 分为 Prefill 和 Decode，涉及 KV Cache 与调度。Ulysses 使用 All-to-All 重排 sequence / head；Ring 沿设备环传递 KV。\n3. Linear Attention 在 Prefill 和 Decode 中如何执行？\n   - 候选人记录：Hybrid 模型通常混合 full attention 和 linear attention，并非所有层都没有 KV Cache。Prefill 在 chunk 内并行、chunk 间传播 state；Decode 每 token 进行 streaming update。瓶颈转向 state / HBM 读写、归约、gating 的 SFU 开销和 small-batch launch。\n4. LLM batching 与调度分别优化什么？\n   - 候选人记录：continuous batching 支持动态进出，chunked prefill 切分长 Prefill，token budget 控制每轮计算。TTFT 关注首 token，TPOT / ITL 关注 token 间隔；需区分 token/s、request/s 和 goodput。\n5. 编程：N 很大的 1D Softmax 如何实现？类似对很大的 N 做 reduce。原文提到“两个 kernel 版本”，随后记录了三个 kernel 的方案：\n   - kernel 1：分小块分别计算，得到局部 m 和 l，可使用 online softmax 或其他方法。\n   - kernel 2：使用一个 block 合并之前各小块的 m 和 l。\n   - kernel 3：根据最终的 m 和 l 得到 softmax 结果。\n\n候选人反馈：LLM 调度部分回答较乱，编程题表现尚可；3 个工作日后约 HR 面，HR 面后横向比较未通过。\n"
  },
  {
    "id": "xhs-6ac65d920000000018004d3c",
    "category": "T0 大厂",
    "company": "字节跳动",
    "role": "AI Infra",
    "stage": "三面",
    "date": "2026-10-07",
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/6ac65d920000000018004d3c",
    "tags": [
      "AI Infra"
    ],
    "source_title": "字节 AI INFRA 三面复盘",
    "body": "本轮主要围绕实习经历和项目展开。\n\n1. 在过去的团队中负责什么？工作交付给谁？TensorFlow 算子适配面向什么场景？\n2. CUDA Graph 和 TP 同时开启时发生卡死：为什么关闭 Graph 或将 TP 降到 1 后问题消失？如何逐步将范围缩小到融合通信算子？通信状态标记放在哪里，为什么使用浮点数？修复后如何使用最小复现和模型级回归验证？定位判断错误后，原同步机制为何如此设计？\n3. 为什么现在更多使用 Triton 和 CuTe DSL？\n   - 候选人从算法协作、可读性、开发效率和当前优化需求解释。\n4. Router Replay 中，rollout 记录的 token、layer、Top-K 信息供谁使用？训练侧在哪一步消费路由？这是论文复现，还是实际训练中也遇到了问题？一个 token 进入 MoE 后的完整前向流程是什么？是否实际接触过 EP 通信？\n   - 候选人反馈：MoE 前向没有讲清楚，EP 通信缺少工程经验；熟悉局部代码，但需要重新梳理完整数据流。\n5. 滑动窗口 Attention 的确定性反向优化：针对 dQ 累加的等待，如何缩小同步范围、调整执行顺序并使独立计算链并行？修改后如何保证累加顺序和确定性？\n6. 国产 GPU 上的算子 benchmark：如何比较不同 shape、batch、dtype，以及自写 kernel、高性能库和旧实现？还讨论了硬件结构、显存带宽和卡间互联。\n7. 反问改进建议。\n\n面试官反馈：实习工作比较扎实，但部分 GPU 硬件表述不准确，需要核对规格；建议继续补充通信基础。候选人计划重点学习 MoE 前向、EP 通信，以及确定性计算中的同步和累加顺序。\n"
  },
  {
    "id": "xhs-6a4239b2000000000803e322",
    "category": "T0 大厂",
    "company": "腾讯",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-06-29",
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/6a4239b2000000000803e322",
    "tags": [
      "AI Infra"
    ],
    "source_title": "腾讯infra一面面经",
    "body": "面试约 45 分钟：实习经历和基础问题 30 分钟、编程 10 分钟、反问 5 分钟。候选人认为腾讯和字节的面试难度明显高于近期面过的其他公司，且本场面试官较常质疑细节。\n\n1. 工作使用单卡还是多卡？多卡时是否考虑过 EP 并行的头拆分问题？\n2. 将异步改为同步后，为什么性能没有明显下降？\n   - 候选人解释：瓶颈在计算而非数据传输。\n3. vLLM 如何进行异步调度？\n   - 候选人记不清，尝试回答后，面试官认为其理解偏差较大，建议重新学习。\n4. 投机解码的接受策略及具体公式是什么？候选人表示忘记了。\n5. 投机解码具体解决什么问题？\n   - 候选人回答“大模型前向传播太慢”，面试官追问具体细节。\n6. MoE 架构的运行过程是什么？张量维度如何变化？\n7. MoE 并行时如何通信？有几种通信方式？\n8. 是否了解 continue batching、dynamic batching、steady batching 和 persistent batching？\n9. 编程：LeetCode Hot 100 中一道中等难度原题。候选人遇到库函数编译报错，讲解思路后算通过。\n"
  },
  {
    "id": "xhs-6ac9adf1000000001500368b",
    "category": "T0 大厂",
    "company": "腾讯",
    "role": "混元 · 多模态推理",
    "stage": "二面",
    "date": "2026-10-10",
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/6ac9adf1000000001500368b",
    "tags": [
      "AI Infra"
    ],
    "source_title": "腾讯混元ai infra 二面（1）",
    "body": "注意：原帖标题标注“（1）”，正文末尾注明字数限制，内容可能有后续。\n\n1. 自我介绍。\n2. 面试官介绍团队：混元多模态推理团队也做大语言模型，如 HY34，涉及图像生成、视频生成、3D 和语音；方向包括框架、算子、后台和加速算法。\n3. 论文：没有看到论文相关内容，是没有写吗？\n4. vLLM Ascend 使用什么卡型？910C 有多少显存？两张卡是否合在一起使用？\n5. 长序列有多长？使用什么模型，Attention 结构是什么？DS V3.1 除 MLA 外还有 NSA 吗？只有 MLA 是否合理？如何理解长序列下 KV Cache 占用过高？All Gather 的峰值显存有多高？\n6. 项目场景中 SLO 的 TTFT 上限是多少？Prefill 推理的 batch size、chunk size 和 prefix cache 命中率是多少？\n7. 是否考虑过一个 session 中的多轮请求？如何管理多轮对话的 KV？是否具备该能力、当时是否开启，是否只有 GPU？单轮 Prefill 完成、尚未 Decode 时，每个 rank 持有部分还是全量 KV？\n   - 面试官指出：对输入长序列全量计算、没有 prefix 和多轮对话管理，并不是工业场景；需要思考如何提高 prefix 命中率并尽量减少通信。\n8. Ring Attention 如何实现？通信与计算的 overlap 在 Python 层实现吗？是否使用双流？有没有更好的方式？短序列、Q length 较小时，通信大于计算，应如何处理？\n   - 面试官认为该场景属于候选人的舒适区，缺少更极致的优化；实现类似视频生成，但线上场景并非如此。\n9. 降低 TP 是否能解决 KV 显存占用过高？是否同时开启 TP 和 CP 来减少 CP group size？其本质是什么？减小 TP 是否降低通信量、约降低多少？KV 通信与减少 TP 有什么关系？TTFT 优化具体如何实现？\n10. 8 卡 baseline 是什么？TP 和 PCP 是否互斥？TP 切分什么、切哪些投影矩阵权重？KV 投影矩阵也切了吗？如果只有一个头，如何切 TP？减少 TP 为什么会增加通信量、降低计算量？\n11. 使用的 MLA 是吸收还是非吸收？为什么使用非吸收？吸收有什么问题和好处？没有吸收时 KV 有 head 吗？\n   - 面试官认为候选人在 KV 方面的工作距离工业场景较远。\n12. 相比 Ring Attention，业界还有什么更好的方案？除了 Python 双流，是否有更极致的优化，如算子优化？通信与计算能否融合到一个算子？除 Python 层外，还了解哪些 KV 通信计算技术？是否了解 Flux，如何实现？\n\n候选人反馈：面试压力较大，原帖因字数限制在此结束。\n"
  },
  {
    "id": "xhs-6a66188b000000000401f0f2",
    "category": "T0 大厂",
    "company": "腾讯",
    "role": "混元 AI Infra",
    "stage": "面试记录",
    "date": "2026-07-26",
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/6a66188b000000000401f0f2",
    "tags": [
      "AI Infra"
    ],
    "source_title": "腾讯混元Ai infra",
    "body": "腾讯混元 AI Infra 面试记录。\n\n1. 自我介绍。\n2. 详细讨论 vLLM。\n   - 候选人反馈：认为推理方向应深入掌握 vLLM；自己仅了解部分关键技术，理解不够深入。\n3. 深入讨论实习中的 RL 训练性能优化和算子问题，也问到了 CUDA。\n   - 候选人反馈：自己不太熟悉 CUDA，认为偏底层方向仍应学习 CUDA，尽管也可以使用 Triton 和 TileLang 编写算子。\n4. 介绍 Megatron 原理和各种并行方式，以及实际项目中如何选择并行度。\n5. 讨论专业背景。候选人是非科班转码，面试官对此深入提问，并询问约了多久。\n6. 本场没有手写代码。团队主要做推理方向的 vLLM 二次开发，候选人认为与自己的经历不太匹配；虽然题目不多，但相关问题问得较细。\n"
  },
  {
    "id": "xhs-6ac38391000000001b01e2e5",
    "category": "T0 大厂",
    "company": "腾讯",
    "role": "混元 AI Infra",
    "stage": "一面",
    "date": "2026-10-05",
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/6ac38391000000001b01e2e5",
    "tags": [
      "AI Infra"
    ],
    "source_title": "腾讯混元AI infra部门一面",
    "body": "1. Tensor Parallel：TP 如何切分 Linear、Attention 和 FFN？Column Parallel 和 Row Parallel 分别如何切分，通信发生在哪里？\n   - Column Parallel 切输入维还是输出维？Row Parallel 如何切分？QKV 如何做 TP？Attention head 如何切分？FFN 两层如何组合切分？为什么常用 Column Parallel + Row Parallel？TP size 越大是否一定越快？\n2. 集合通信：TP 中为什么需要 All-Reduce、Reduce-Scatter 和 All-Gather？具体通信量如何计算？\n   - 给定 tensor shape，通信多少 Byte？TP=2 与 TP=4 有什么变化？通信量与 batch、sequence length、hidden size 有什么关系？如何判断已进入 communication bound？\n3. Data Parallel：DP 和 TP 有什么区别？什么时候应增加 DP 而不是 TP？\n   - DP 是否复制完整模型？为什么 DP 能提高吞吐？DP 是否降低单请求延迟？单卡放不下模型时 DP 能否解决？Serving DP 和训练 DP 有什么不同？\n4. Pipeline Parallel：PP 如何切分模型？为什么实际实现复杂？\n   - Stage 如何划分？Micro-batch 是什么？Pipeline bubble 如何产生、如何减少？Stage 不均衡怎么办？为什么 PP 会增加延迟？是否实际实现过 PP？\n5. Context Parallel：CP 为什么适合长 context？切分 sequence 后，Attention 如何跨 GPU 计算？\n6. AI 实战编码考核：开发 QQ 空间好友动态推荐功能，覆盖动态数据管理、行为仿真、评分排序和 Top N 推荐的完整流程。\n"
  },
  {
    "id": "xhs-6ac3a198000000001b0313c8",
    "category": "T0 大厂",
    "company": "腾讯",
    "role": "混元 · 推理优化",
    "stage": "二面",
    "date": "2026-10-05",
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/6ac3a198000000001b0313c8",
    "tags": [
      "AI Infra"
    ],
    "source_title": "腾讯AI infra部门二面",
    "body": "岗位：腾讯混元 AI 推理团队，大模型推理优化方向。面试官负责 KV Cache 与调度，面试主要围绕大模型推理系统。\n\n1. 自我介绍，介绍 AI Infra 项目及论文成果。\n2. Ampere → Hopper → Blackwell 三代指令集有哪些变化？涉及 TMA、Tensor Memory、异步调度及 FP4 / FP6。\n3. Hopper 的 WGMMA 需要 warp group 发射，为什么 Blackwell 的 UMMA 只需单个 warp？如何在 Tensor Memory 上应用 scale factor？\n4. Cache-aware 路由中的热点实例：cache score + load score 方案如何设计，lambda 如何确定，对命中率有什么影响？如何跨实例共享 KV Cache？与 Dynamo 现有策略有什么区别？\n5. 英特尔 TILE cache 仿真及系统层级：如何为客户提供并行配置和 PD 配比参考？\n6. W4A4 稀疏 kernel：WMMA 指令、量化方案、4 Tile 对应 1 Bitmap 的创新、split key / double buffer / LSBD pipeline、M16N8K64 和应用场景。\n7. 笔试二选一：手写 Save Softmax（原文如此）及优化点，包括 warp shuffle 归约和使用寄存器暂存以减少访存。原帖未说明另一道题。\n8. 反问：团队业务、技术难点、人均 GPU，以及调度、框架和算子团队的划分。\n"
  },
  {
    "id": "xhs-6a6efa530000000028005c8c",
    "category": "T0 大厂",
    "company": "腾讯",
    "role": "游戏 · 训练框架",
    "stage": "一面",
    "date": "2026-08-02",
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/6a6efa530000000028005c8c",
    "tags": [
      "AI Infra"
    ],
    "source_title": "腾讯游戏 ai infra 训练框架一面",
    "body": "候选人反馈：感觉面试官兴趣不高，问题不深也不难；后来了解到团队做强化学习，本场未通过。\n\n1. 项目模型的 MFU 是多少？\n2. 所用框架支持哪些并行方式？DDP 和 ZeRO 有什么区别？\n3. 项目的具体细节是什么？项目只是框架适配，还是包含具体功能开发？\n4. 选择一个芯片适配问题进行介绍。\n5. Pin memory 具体如何通信，有几个进程？\n   - 候选人表示没有答上；原文另记“CPU 内部通过队列 queue 通信”。\n6. TP 和 PP 的使用场景是什么？\n7. 是否做过强化学习？候选人回答没有做过，仅有了解。\n8. MHA、GQA、MQA 有什么区别？\n9. 编程：实现 GQA。\n"
  },
  {
    "id": "xhs-696b0d9d000000000e00ecf9",
    "category": "T0 大厂",
    "company": "阿里巴巴",
    "role": "阿里国际 · AI Infra",
    "stage": "面试记录",
    "date": "2026-01-17",
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/696b0d9d000000000e00ecf9",
    "tags": [
      "AI Infra"
    ],
    "source_title": "阿里国际ai infra面（凉）经",
    "body": "候选人反馈：这是整个 12 月的第一场面试，也可能是第一次参加大厂面试；很多基础问题不了解。面试官态度友好，最后给了学习建议，本场未通过。帖子发布时间与面试发生时间可能不同。\n\n1. 自我介绍，约 15 分钟。\n2. 根据项目提问。\n3. FlashAttention 和 Online Softmax 的原理是什么？是否看过 CUDA kernel？FlashAttention V1、V2、V3 和 FlashDecoding 的原理是什么？\n4. 推理优化有哪些思路和方法？\n5. 是否使用过 vLLM 或 SGLang？原理是什么？\n6. 是否了解 Dynamic Batching？\n7. 编程：使用 block 编写 reduce；优化版本使用 warp shuffle；是否还能进一步优化？候选人未能继续回答。\n8. 在读取的数组元素数量相同时，为什么加载到 shared memory 比直接从 HBM 读取 input 更快？\n9. 是否了解 shared memory 的 bank conflict？\n10. 反问：自己还可以在哪些方面提升？\n"
  },
  {
    "id": "xhs-6a9c3de3000000002502ecf9",
    "category": "T0 大厂",
    "company": "阿里巴巴",
    "role": "AI Infra",
    "stage": "二面",
    "date": "2026-09-06",
    "type": "正文已整理 · 图片待核对",
    "source": "https://www.xiaohongshu.com/explore/6a9c3de3000000002502ecf9",
    "tags": [
      "AI Infra"
    ],
    "source_title": "阿里 ai infra 二面复盘",
    "body": "注意：原帖图片暂未完成核对，可能包含正文以外的问题。\n\n1. 链表、二叉树、哈希表的复杂度和使用场景是什么？\n2. 如何管理几千到几万个定时器？堆的插入和触发复杂度是多少？\n3. TCP 与 UDP 有什么区别？TCP 三次握手如何进行？多台机器共用交换机时，TCP 和 UDP 在不同数据规模下实际表现如何？\n4. TP + CUDA Graph 场景下的稳定性排查：如何从大规模超时缩小到 TP=2 的最小复现，对比 TP=1 / TP>1，并将范围收敛到融合通信路径的状态同步问题？Graph 是触发条件还是根因？通信双方如何判断 buffer 状态？为什么默认路径未复现？\n5. 确定性 Router GEMM：为什么 Split-K 会影响确定性？为什么固定配置的 persistent kernel 在小 M 下浪费严重？如何根据 shape 选择更合适的路径，并保留回退方案？\n6. Decode 侧减少 CPU / GPU 同步等待的融合算子：为什么原数据需要往返 CPU？哪些计算可以留在 GPU 上？如何减少 Decode 中反复出现的空隙？\n7. NCCL 与推理系统设计：Ring / Tree All-Reduce 如何工作，各自偏向吞吐还是延迟？多节点 Prefill / Decode 分离时，Prefill 产生的 KV Cache 如何传给 Decode 节点，如何权衡通信方式和缓存复用？\n\n候选人反馈：数据结构和网络基础仍然重要，需要结合场景推导。介绍项目问题时，应完整说明触发条件、最小复现、排查假设、根因范围、修复边界以及正确性与回归验证。\n"
  },
  {
    "id": "xhs-6aa3ff60000000002901aab6",
    "category": "T0 大厂",
    "company": "阿里巴巴",
    "role": "阿里妈妈 · Infra",
    "stage": "一面",
    "date": "2026-09-11",
    "type": "正文已整理 · 图片待核对",
    "source": "https://www.xiaohongshu.com/explore/6aa3ff60000000002901aab6",
    "tags": [
      "AI Infra"
    ],
    "source_title": "阿里妈妈ai infra一面",
    "body": "注意：原帖图片暂未完成核对，可能包含正文以外的问题。\n\n阿里妈妈 Infra 一面，主要讨论项目，基础问题较少。\n\n1. 世界模型 / VAE 并行：候选人此前直接对 VAE 做 spatial 切分，未使用 halo exchange 等无损方案；面试官从其专业领域出发进行了追问。\n   - 候选人反馈：认为简历中这部分的表述需要重新斟酌。\n2. 编程：使用 CUDA 实现 Online Softmax。\n3. 智力题：100 个 GPU 寻找任务包。\n   - 100 个 GPU 编号为 0～99；100 个任务包也分别标有 0～99，每个编号恰好出现一次。任务包随机分配到 GPU，每张卡恰好放一个，位置构成随机排列。\n   - GPU i 要找到编号为 i 的任务包，从自己的位置开始。每查看一个位置，就可看到该任务包上的编号，并据此决定下一步查看哪个 GPU 上的任务包；每个 GPU 最多查看 50 个位置。\n   - 所有 GPU 可以事先约定同一种策略，但搜索过程中不能相互通信，也不知道其他 GPU 的搜索结果。\n   - 是否存在一种策略，使所有 GPU 在 50 次以内找到各自任务包的概率远高于每个 GPU 随机选择 50 个位置？如果有，策略是什么？整体成功概率约为多少？\n\n候选人认为第 3 题是随机排列中的置换环 / cycle decomposition 问题，属于经典 100 prisoners problem 的变体；据面试官说，该题可能由 AI 生成。候选人对面试中遇到该题感到意外。\n"
  },
  {
    "id": "xhs-6ad99bac000000002c010b80",
    "category": "T0 大厂",
    "company": "阿里巴巴",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-10-22",
    "type": "正文已整理 · 图片待核对",
    "source": "https://www.xiaohongshu.com/explore/6ad99bac000000002c010b80",
    "tags": [
      "AI Infra"
    ],
    "source_title": "阿里巴巴 ai infra 一面面经（总结扩展版）",
    "body": "注意：原帖图片暂未完成核对，可能包含正文以外的问题。原帖标题称“总结扩展版”，不能确认每项追问是否均为现场原话。\n\n1. MoE 投机解码：为什么 MoE 模型进行 Speculative Decoding 时，加速收益不能像 Dense Model 一样，随着一次 Verify 的 token 数增加而近似线性提升？\n2. FP8 → FP4 量化：完整的量化流程是什么，具体如何操作？\n3. MXFP8 格式：可表示的数值范围和精度如何？与 MXFP4、FP16 / BF16 有什么区别？\n4. Scale 与 Weight 对齐：对于 MXFP4 量化中 Scale 与 Weight 的分片对齐问题，如果不受现有实现限制，还可以从哪些角度设计解决方案？\n5. KV Cache 与 L2 Cache：如果将 KV Cache 放到 HBM 以外的其他介质中，是否还需要关注 L2 Cache？应从哪些方面优化？\n6. 硬件选型与性能对比：为什么选择 NVIDIA H20 与华为昇腾 A5，而不是其他 GPU 或 AI 加速卡？\n7. 编程（二选一）：实现 MoE 核心计算流程，包括 Router、Top-K Expert 选择、Expert 计算和结果合并；或者非递归实现二叉树后序遍历。\n\n候选人反馈：前面的问题基本能回答，但手写 MoE 感到困难。\n"
  },
  {
    "id": "xhs-6a30c6f20000000020039533",
    "category": "T0 大厂",
    "company": "百度",
    "role": "Infra",
    "stage": "一面 / 二面",
    "date": "2026-06-16",
    "type": "正文已整理 · 图片待核对",
    "source": "https://www.xiaohongshu.com/explore/6a30c6f20000000020039533",
    "tags": [
      "AI Infra"
    ],
    "source_title": "百度infra一二面面经",
    "body": "注意：原帖图片暂未完成核对，可能包含正文以外的问题。\n\n候选人背景：双 9 本硕、28 届研一，有一段小厂 Infra 实习经历，无论文。\n\n一面约 75 分钟：简历和基础问题 45 分钟，编程 25 分钟，反问 5 分钟。面试官深入询问实习，简略询问项目；候选人表示大部分基础问题答上了，但编程语言基础和手写代码表现不佳，记录了以下未答好的问题：\n\n1. Prefix Cache 融合算子融合了哪些内容？\n2. 是否了解 DSA？候选人看过但忘记了。\n3. vLLM 支持哪些投机解码方法？\n4. 是否看过 Triton 算子？候选人没有看过。\n5. 如何评估算子访存效率及计算能力发挥程度？\n6. `std::forward`、`move`、`enable_if` 各有什么作用？\n7. Python 的全局解释器锁是什么？\n8. RoPE 编码相对传统位置编码有什么优点？\n9. 编程：LeetCode 非 Hot 100 的中等难度题。\n\n二面约 40 分钟，没有基础题或手写代码，主要根据简历提问，并有看代码回答问题的环节。候选人表示面试后约一周收到口头 offer，推测横向比较耗时较长。\n\n候选人反馈：实习和基础知识基本达标，但代码能力仍有差距；认为手写代码仍是大厂常用筛选标准，Infra 的代码能力要求通常比算法方向更高，且以 C++ 为主。\n"
  },
  {
    "id": "xhs-6a700d7400000000350155ba",
    "category": "T0 大厂",
    "company": "百度",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-08-03",
    "type": "正文已整理 · 图片待核对",
    "source": "https://www.xiaohongshu.com/explore/6a700d7400000000350155ba",
    "tags": [
      "AI Infra"
    ],
    "source_title": "百度ai infra一面",
    "body": "注意：原帖图片暂未完成核对，可能包含正文以外的问题。\n\n1. 自我介绍，介绍 vLLM Ascend 相关实习工作。\n2. 解释 Ring Attention 原理。多长的文本算长文本？DS V3.2 支持多长文本的推理？Ring Attention 的通信点在哪里，通信形式是什么？`isend` / `ireceive` 使用 TCP 还是其他方式？\n3. C++ 部分如何实现？优化的是负载均衡吗，有什么数据？收益针对整个计算过程还是其中一部分？\n4. DCP 的方案是什么？Decode 阶段计算强度不大，为什么还需要 CP？为什么不使用 Ring Attention？异构 mask 的“异构”体现在哪里？\n5. KV Cache 如何管理，使用什么设计模式？如何测试精度？是否由一个 router 统一管理后端的多个 memory？是否会影响三级缓存？\n6. Layout 同时影响三级缓存和 PD 分离，在 PD 分离场景中需要做哪些修改？\n7. 编程：二分查找。\n8. 反问：请求改进建议。面试官表示没有特别建议、表现不错，但候选人随后很快收到未通过结果。\n"
  },
  {
    "id": "xhs-6a92ecb70000000007004c9a",
    "category": "T0 大厂",
    "company": "百度",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-08-29",
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/6a92ecb70000000007004c9a",
    "tags": [
      "AI Infra"
    ],
    "source_title": "百度 ai infra 一面复盘",
    "body": "本场从项目切入，延伸到推理框架、CUDA Graph、确定性计算、量化和 RL Infra。\n\n1. MoE Router Replay 如何接入 RL 流程？为什么能降低训推不一致？rollout 端的 Top-K 路由信息如何记录、如何随数据传给训练侧、如何在 CPU / GPU 之间搬运？\n2. vLLM 的整体结构：从请求进入到 scheduler、engine、worker、model runner，再到下层算子和通信，数据流和控制流分别如何运行？\n3. TP + CUDA Graph 卡死问题：如何从大规模问题缩小到 TP=1 / TP>1 的对比？为什么 Graph 可能只是触发条件，真正的问题可能出在被替换的融合通信路径？capture / replay 有哪些约束，例如 kernel、shape 和地址中哪些必须稳定？\n4. 确定性 Router GEMM：为什么 Split-K 会导致结果不完全一致？为什么固定配置在 Decode 的小 M 场景下浪费资源？如何设计动态选配置及回退路径？\n5. Decode 融合算子、量化和模型结构：如何减少 CPU / GPU 往返同步？介绍 W4A16、AWQ、QAT、MHA、GQA，以及对 RL 框架的理解。\n\n候选人反馈：项目结果能够讲述，并不代表能够应对深入追问。计划重新梳理 vLLM 从请求到 kernel 的全链路，讲清 CUDA Graph 的捕获、显存及 replay 约束，并区分量化、Attention 和 Router GEMM 各自的收益，避免把多个优化的总收益混为一个数字。\n"
  },
  {
    "id": "xhs-6abf5b2f0000000015011d00",
    "category": "T0 大厂",
    "company": "百度",
    "role": "AI Infra",
    "stage": "一面",
    "date": "2026-10-02",
    "type": "正文已整理 · 图片已核对",
    "source": "https://www.xiaohongshu.com/explore/6abf5b2f0000000015011d00",
    "tags": [
      "AI Infra"
    ],
    "source_title": "百度ai infra一面",
    "body": "1. DiT / 视频生成和 LLM 推理的优化重点有什么区别？\n   - 候选人记录：DiT 更像超长 Prefill，sequence 长、step 多，重点偏向计算和 Attention 优化；LLM 还有 Decode，涉及 KV Cache 和调度等系统问题。\n2. TP、SP、CP、EP 分别如何切分，通信开销是什么？\n   - 候选人记录：TP 为 tp / tpsp；Ulysses SP 以 All-to-All 为核心，通信较少；Ring CP 将 KV 分片并沿 Ring 通信；EP 以 dispatch / combine 为核心。\n3. Prefill CP 和 Decode CP 有什么区别？\n   - 候选人记录：Prefill 可以 Ring 传递 KV，边通信边计算；Decode 的历史 KV 很大，更适合保持 KV 分片并通信小得多的 Q。\n4. Prefill 和 Decode 的特点及优化方向是什么？\n   - 候选人记录：Prefill 偏 compute-bound；Decode 偏 memory-bound，重点包括 KV Cache 和调度。\n5. PagedAttention 解决什么问题？\n   - 候选人记录：分页管理 KV Cache，减少内存碎片。\n6. Prefix Cache 是什么？\n   - 候选人记录：命中相同 prefix 时复用已有 KV Cache，减少重复 Prefill 计算。\n7. 量化有哪些收益？\n   - 候选人记录：提高 Tensor Core 计算吞吐，减少 memory traffic，降低显存占用，从而支持更长 context 或更大 batch。\n8. NVFP4、MXFP4、block-wise FP8 有什么区别？\n   - 候选人记录：关注数据格式、group size / block size、scale 格式和两级量化。\n9. 如何使用 Roofline Model 分析 kernel？\n   - 候选人记录：将 arithmetic intensity 与硬件 ridge point 对比，判断 memory-bound 或 compute-bound。\n10. HBM 和 shared memory 的访存分别需要注意什么？\n"
  }
];
