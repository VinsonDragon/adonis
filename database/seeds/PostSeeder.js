"use strict";

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use("Factory");
const Post = use("App/Models/Post");

class PostSeeder {
  async run() {
    const posts = [
      {
        title: "停用社交网络",
        content:
          "三月份可能感觉太疲惫了，月底的时候做了决定，停用社交网络一个月。这个月每天工作 6.3 小时，写了 10 万字的课程。工作时长没增加多少，但是效率提高了，感觉也轻松了很多。每天工作 6.3 小时，写了 10 万字+（中文 + 英文 + 数字 + 标点）的网站开发课程（Node.js）。我本以为工作时间会比平时多很多，但是一统计，其实跟去年的平均工作时间  6 小时是差不多的。但我能明显感觉到工作效率提升了很多，也不再疲惫了。",
        user_id: 1
      },
      {
        title: "内容更新：《Node.js：用户注册》",
        content:
          "《Node.js：用户注册》先回顾一下应用里的用户相关的东西，比如创建 users 表的 migration，users 表对应的 User 模型，还有 users 资源控制器 UserController。然后用 Bootstrap 的表单组件设计一个注册用户用的表单，表单上面有普通的文本框元素，密码元素，还有邮件元素。",
        user_id: 1
      },
      {
        title: "邮件验证功能的设计开发思路（Email Verification）",
        content:
          "用户成功注册以后，会往用户注册时填写的邮箱里发送一封验证邮件，用户登录到自己的邮箱，找到验证邮件，点击邮件里的验证链接，完成验证。在 Node.js 应用开发课程里添加了一项邮件验证功能，这个功能的思路也可以适用于短信验证，或者其它的验证方式。",
        user_id: 1
      },
      {
        title: "MailHog：准备本地开发测试的邮件服务",
        content:
          "在做 Node.js 应用开发课程里，介绍应用的邮件功能的时候，我需要一个在本地测试应用的邮件功能。可以使用 MailHog 提供的服务。它提供了一个 Web 界面，可以检查应用发送的邮件。运行 MailHog 最简单的方法是用 Docker，在本地安装 Docker for mac 或 Docker for windows。",
        user_id: 2
      },
      {
        title: "内容更新：《Node.js：内容关系 #2》",
        content:
          "《Node.js：内容关系 #2》主要介绍了利用之前我们在内容之间定义的关系。理解使用 EagerLoading 的方式获取到与内容相关的内容。比如在查询文章列表数据的时候，带着与文章相关联的用户数据，还可以带着与用户相关的用户档案数据。",
        user_id: 2
      },
      {
        title: "内容分页器功能的设计开发思路（Pagination）",
        content:
          "分页器上应该有前进与后退按钮，可以向前向后翻页。还要有一组页码，点击页码打开对应的页面。页码如果太多不能全部显示出来，可以只显示当前页的前两个项目，后两个项目，再加上第一页还有最后一页。",
        user_id: 2
      }
    ];
    await Post.createMany(posts);
  }
}

module.exports = PostSeeder;
