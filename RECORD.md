# Design Iteration Record

## 1. Record Policy

- 本记录自项目开始维护，按实际发生顺序追加。
- P1–P5 为输入准备阶段，不计入正式视觉设计迭代；记录实际 Prompt 原文与真实产出。
- R0 为基线生成；R1–R8 为八轮正式视觉设计优化。
- 每轮修改前，先记录当前问题、截图证据、对应评价标准、修改假设与 Prompt 原文。
- 每轮只解决一个设计问题；Prompt 发出后不得事后改写。
- 每轮修改后，补充 Agent 改动摘要、固定视口视觉证据、前后评分、回归检查、决策与 Git 信息。
- 未执行的检查、未生成的截图、未取得的用户评价一律标记为“未执行 / 未提供 / 待确认”，不得推测或虚构。
- 未经用户明确确认，不进入下一阶段或下一轮。
- 每轮结束前必须验证网站可运行，并检查已有功能是否回归。

## 2. Project Definition

- 研究主题：多模态参考驱动的个人网站生成与视觉迭代。
- 核心命题：在活泼灵动的个性表达与招聘者快速获取信息之间取得平衡。
- 产品：同一网站内通过 Tab 切换的多视图互动式个人网站。
- 计划 Tab：Home、Experience、Projects、Interests、Contact。
- 计划视觉方向：活泼灵动的外壳，清晰克制的信息核心；多巴胺配色与有目的的动效。
- 计划技术栈：Vite、React、TypeScript；最终方案以 P4 确认结果为准。
- 正式轮次：R0 基线 + R1–R8 优化。
- 计划验证视口：Desktop 1440 × 900；Tablet 768 × 1024；Mobile 390 × 844。
- 当前仓库：本地 Git 仓库（远程地址尚未提供）。
- 计划来源：另一会话中的《多模态参考驱动的个人网站生成与视觉迭代研究计划》。

## 3. Evaluation Framework (Draft; to be frozen before R0)

### 3.1 Hard Gates — Pass / Fail

- 内容完整且无虚构事实、无无意占位文案、无失效关键链接。
- 关键交互与 Tab 可用，构建及运行成功，无已知阻断性控制台错误。
- 390、768、1440 px 视口无内容遮挡、裁切或非预期横向滚动。
- 键盘可操作、焦点可见、语义合理、图片具有替代文本、支持 reduced motion。
- 正文及大字号文本的颜色对比符合最终确认的可读性门槛。
- 资源有效，性能检查方式及门槛在 R0 前确认。

### 3.2 Task Effectiveness

- 首屏能够快速传达姓名、方向与差异点。
- 招聘者能够快速找到最近经历、代表项目与联系方式。
- 导航命名与内容归属可预测。
- 项目表达能够说明角色、行动、方法与结果。

> 用户测试样本、任务、计时方式与成功门槛尚未执行或确认；不得提前记录测试结果。

### 3.3 Perceived Quality — 1–5

- E1 信息层级与扫读效率。
- E2 配色活泼、协调且不过度刺激。
- E3 排版、间距、圆角、阴影与图形语言一致。
- E4 具有个人辨识度，避免通用模板感。
- E5 动效服务于引导、反馈、层级或叙事。
- E6 整体同时呈现活泼、灵动与专业。

## 4. Experiment Configuration

- Agent：Codex。
- Model and version：未从当前会话获得可验证的具体版本标识。
- Start date：2026-08-30（Asia/Shanghai）。
- Manual code editing：由 Agent 按用户 Prompt 执行；用户人工修订须单独记录。
- Fixed viewports：1440 × 900；768 × 1024；390 × 844。
- Git repository：本地初始化中；远程仓库未提供。
- Current stage：项目初始化，尚未进入 P1。

## 5. Stage Ledger

| Stage | Purpose | Status | User confirmation to proceed |
|---|---|---|---|
| Setup | 建立记录与版本基础 | In progress | Not required |
| P1 | 内容与信息架构文档 | Not started | Required |
| P2 | 素材清单 | Not started | Required |
| P3 | 视觉与动效规范 | Not started | Required |
| P4 | 前端技术方案 | Not started | Required |
| P5 | 开发计划 | Not started | Required |
| R0 | 基线生成 | Not started | Required |
| R1 | 单一设计问题优化 | Not started | Required |
| R2 | 单一设计问题优化 | Not started | Required |
| R3 | 单一设计问题优化 | Not started | Required |
| R4 | 单一设计问题优化 | Not started | Required |
| R5 | 单一设计问题优化 | Not started | Required |
| R6 | 单一设计问题优化 | Not started | Required |
| R7 | 单一设计问题优化 | Not started | Required |
| R8 | 单一设计问题优化 | Not started | Required |

## 6. Setup Record

### S0 — Record and Repository Initialization

- Date：2026-08-30。
- Initial filesystem evidence：项目目录仅包含 `work/` 与 `outputs/`。
- Initial Git state：初始化前不是 Git 仓库。
- Action：创建本记录；初始化本地 Git 仓库；不创建网站代码，不进入 P1。
- Inputs available：另一会话中的研究与执行计划。
- Inputs missing：简历、作品集 PDF、图片/视频/链接、静态风格参考、动效参考、远程仓库地址。
- Fabrication guard：计划中的 Prompt 是未来阶段模板，当前未标记为已发送。
- Result：待完成后补充。
- Git commit：待提交后补充。

## 7. Preparation Stage

> 以下阶段仅在用户确认进入后开始。每个 Prompt 原文在发送或执行前写入，不用计划模板冒充实际 Prompt。

### P1 — Content and Information Architecture

- Status：Not started。
- Input：未提供。
- Exact Prompt：未发送。
- Output：无。
- Human corrections：无。
- Decision：等待用户确认与输入材料。

### P2 — Asset Manifest

- Status：Not started。

### P3 — Visual and Motion Specification

- Status：Not started。

### P4 — Front-end Technical Specification

- Status：Not started。

### P5 — Development Plan

- Status：Not started。

## 8. Baseline and Formal Iterations

### R0 — Baseline Generation

- Status：Not started。

### R1–R8

- Status：Not started。
- Note：每轮主题根据上一版本真实证据确定；计划主题只作为候选，不预写成既成事实。

## 9. Per-round Template

### RX — [Round title]

#### A. Pre-modification Record

- Date：
- Current commit/tag：
- Target criterion：
- Current problem：
- Screenshot evidence：
- Modification hypothesis：
- Must remain unchanged：
- Regression risks：

#### B. Exact Prompt

> 未发送。

- Prompt length：

#### C. Agent Output

- Files/components changed：
- Agent change summary：
- Checks actually performed：
- Known issues：
- Result commit/tag：

#### D. Visual Evidence

- Before screenshot：
- After screenshot：
- Interaction recording：
- Fixed viewport：

#### E. Evaluation

| Criterion | Before | After | Evidence |
|---|---:|---:|---|
| Target criterion | Not scored | Not scored | |

#### F. Regression Check

| Check | Result | Evidence |
|---|---|---|
| Website builds and runs | Not run | |
| All existing Tabs work | Not run | |
| Content remains accurate | Not run | |
| Desktop layout | Not run | |
| Tablet layout | Not run | |
| Mobile layout | Not run | |
| Keyboard interaction | Not run | |
| Console errors | Not run | |
| Reduced motion | Not run | |

#### G. Decision

- Outcome：Not evaluated。
- Decision：Pending user confirmation。
- Reason：
- Remaining limitation：
- Next-round candidate：
- Code commit：
- Documentation commit：
- Git tag：

