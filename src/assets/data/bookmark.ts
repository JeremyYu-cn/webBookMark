export interface IBookmarkData {
  key: string;
  title: string;
  description: string;
  image?: string;
  icon?: string;
  url: string;
}

export const tmpBookmarkList: IBookmarkData[] = [
  {
    key: 'index',
    title: '百度',
    icon: 'baidu.svg',
    description: '测试百度',
    url: 'https://www.baidu.com',
  },
  {
    key: 'juejin',
    title: '掘金',
    description:
      '掘金是一个帮助开发者成长的社区,是给开发者用的 Hacker News,给设计师用的 Designer News,和给产品经理用的 Medium。掘金的技术文章由稀土上聚集的技术大牛和极客共同编辑为你筛选出最优质的干货,其中包括：Android、iOS、前端、后端等方面的内容。用户每天都可以在这里找到技术世界的头条内容。与此同时,掘金内还有沸点、掘金翻译计划、线下活动、专栏文章等内容。即使你是 GitHub、StackOverflow、开源中国的用户,我们相信你也可以在这里有所收获。',
    url: 'https://juejin.cn/',
    image: 'https://juejin.cn/favicons/apple-touch-icon.png',
  },
  {
    key: 'juejin',
    title: '掘金',
    description:
      '掘金是一个帮助开发者成长的社区,是给开发者用的 Hacker News,给设计师用的 Designer News,和给产品经理用的 Medium。掘金的技术文章由稀土上聚集的技术大牛和极客共同编辑为你筛选出最优质的干货,其中包括：Android、iOS、前端、后端等方面的内容。用户每天都可以在这里找到技术世界的头条内容。与此同时,掘金内还有沸点、掘金翻译计划、线下活动、专栏文章等内容。即使你是 GitHub、StackOverflow、开源中国的用户,我们相信你也可以在这里有所收获。',
    url: 'https://juejin.cn/',
    image: 'https://juejin.cn/favicons/apple-touch-icon.png',
  },
];
