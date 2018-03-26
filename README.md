# CommandReference
中文Minecraft命令参考、索引。 [中文Minecraft命令参考](https://commandtutorials.neocities.org)

本repo主要用作储存相关资料及索引页面，欢迎提交Pull Request更新资料。[资料格式](/format.md)

> 尚未更新完毕
>
> 欢迎使用 [帖子资料填写工具](https://pca006132.github.io/CommandReference/tool.html) 帮助录入帖子！

## 录入要求
* 教程
    * 该教程必须有与别不同的内容，对读者有帮助。
    * 或该教程需要对新人有吸引力、讲解清晰有序。
* 生成器、资源
    * 该生成器的功能为索引里其他生成器没有的，或该资源有现有资源覆盖不到的部分，或比现有生成器/资源更容易使用。
    * 该生成器必须无毒，资源必须正确可靠。
* 作品
    * 该作品必须以命令为主。
    * 该作品必须有与别不同之处，如系统设计、命令使用、黑科技等。
    * 该作品必须有教程，或命令有一定可读性，可供读者参考。
* 索引
    * 该索引内必须有至少5部教程/作品符合上述要求。
    * 如果该作者/组织有大量细碎帖子在其索引内，则应**提高其帖子的录入标准**，其索引可以加上其多数帖子的标签。（避免本索引全都是单个作者/组织的帖子）
* 常用网站
    * 如果为论坛性质，则必须有超过10篇足以录入本索引的帖子。
    * 如果为Wiki页面，则必须实用。

## 贡献
如果你觉得有资料尚未更新，你可以亲自帮忙！建议各位先帮忙录入**自己/朋友**（但请先询问，以免撞车）的帖子。

如果你不懂编程，则可以把帖子的JSON列表扔给我来处理。

如果你对编程有点认识的话：

1. 注册/登入Github.
2. Fork一份本repo（右上角有个Fork按钮）。（之后需要更新的话请 ）
3. 对自己的repo进行修改，然后commit 和 push.
4. 给这repo来个[Pull request](https://github.com/geeeeeeeeek/git-recipes/wiki/3.3-%E5%88%9B%E5%BB%BA-Pull-Request#mary%E5%88%9B%E5%BB%BA%E4%BA%86%E4%B8%80%E4%B8%AApull-request)!
5. 等待审阅。

由于本repo会不断地merge各种pull request及进行改动，所以你的fork可能会过时，这就需要进行merge:
1. 设置upstream: `git remote add upstream https://github.com/pca006132/CommandReference.git` （只需要设置一次）
2. 检查upstream有没有更新，有的话就拉过来: `git fetch upstream`
3. 合并upstream更新: `git merge upstream/master`。（如果出现冲突，即conflict，则建议询问其他用户如何修复）

--------

本索引接受以下各种Pull request:

* 更新名词列表: 管理员会检查更新是否正确和必要。
* 录入、取代帖子: 管理员会检查JSON和帖子是否符合要求。（发布Pull Request前请自行执行 `npm run check` 命令，确保格式符合规定，节省时间）
* 更新帖子资料: 管理员会检查JSON和帖子是否符合要求。
* 改善主页: 管理员会检查 `index.html` 修改后的外观、体验，询问其他用户意见后决定是否接纳修改。

本索引亦接受以下各种Issue:

* 删除帖子: 该帖子如果有严重错误，并且能证明作者长时间都没有改正，则可以申请从索引中删除该帖子。
* 改善主页: 可以提出对主页的改善建议，但我们不保证能够进行改善。
* 增加、修改标签及类型列表: 管理员会考虑是否必要。

## TODO

1. 录入帖子。**这需要各位的帮助！**
2. 编写主页。