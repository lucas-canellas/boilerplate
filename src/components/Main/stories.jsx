import Main from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Main",
  component: Main,
};

export const Basic = (args) => <Main {...args} />;

Basic.args = {
  title: "default",
  description: "default",
};
