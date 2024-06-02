import classNames from "classnames";
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={classNames("max-w-[110rem] mx-auto px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
