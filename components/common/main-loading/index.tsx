import Icon from "@/components/common/icon";

const MainLoading = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <Icon name="loader" className="w-10 h-10 text-emerald-500 animate-spin" />
  </div>
);

export default MainLoading;
