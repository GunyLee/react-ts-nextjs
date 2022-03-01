export const globalNav = [
  {
    title: { value: "resume", children: "이력서", name: "id-card" },
    sections: [
      {
        subtitle: "CHAPTER 1",
        collapses: [
          {
            title: { value: "resume", children: "이력서", name: "pen" },
            value: "intro1",
            children: "자기소개",
          },
          {
            title: { value: "resume", children: "이력서", name: "pen" },
            value: "intro2",
            children: "경력",
          },
          {
            title: { value: "resume", children: "이력서", name: "pen" },
            value: "intro3",
            children: "학력",
          },
        ],
      },
      {
        subtitle: "CHAPTER 2",
        collapses: [
          {
            title: { value: "resume", children: "이력서", name: "pen" },
            value: "intro4",
            children: "자기소개",
          },
          {
            title: { value: "resume", children: "이력서", name: "pen" },
            value: "intro5",
            children: "경력",
          },
          {
            title: { value: "resume", children: "이력서", name: "pen" },
            value: "intro6",
            children: "학력",
          },
        ],
      },
    ],
  },
  {
    title: { value: "blog", children: "블로그", name: "browser" },
    sections: [
      {
        collapses: [
          {
            title: { value: "resume", children: "이력서", name: "pen" },
            value: "blog1",
            children: "기술",
          },
          {
            title: { value: "resume", children: "이력서", name: "pen" },
            value: "blog2",
            children: "여담",
          },
          {
            title: { value: "resume", children: "이력서", name: "pen" },
            value: "blog3",
            children: "자기계발",
          },
        ],
      },
    ],
  },
];

export type GlobalNavTitleItemProps = {
  value?: string;
  children?: React.ReactNode;
  name?: string;
  onClick?: () => void;
  checked?: boolean;
};

export const globalNavTitleItemDefaultProps = {};

export type GlobalNavCollapseItemProps = {
  title?: GlobalNavTitleItemProps;
  value?: string;
  children?: React.ReactNode;
};

export const globalNavcollapseDefaultProps = {};

export type GlobalNavCollapseSectionProps = {
  subtitle?: string;
  collapses: GlobalNavCollapseItemProps[];
};

export type GlobalNavProps = {
  title: GlobalNavTitleItemProps;
  sections?: GlobalNavCollapseSectionProps[];
};
