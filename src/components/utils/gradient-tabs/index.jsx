import TabsComp from "./tabComp";

export function GradientTabsDemo({ onChange = () => {} }) {
  const tabs = [
    {
      id: "All",
      title: "All",
    },
    {
      id: "Frontend",
      title: "Frontend",
    },
    {
      id: "Mobile",
      title: "Mobile",
    },
    {
      id: "Backend",
      title: "Backend",
    },
  ].map((data) => ({ ...data, gradient: "bg-gradient-to-r from-blue-400 to-purple-500" }));
  return <TabsComp tabs={tabs} onChange={(id) => onChange(id)} />;
}
