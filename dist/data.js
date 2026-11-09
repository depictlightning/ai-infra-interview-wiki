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
  }
];
