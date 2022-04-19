interface IProps {
    children: React.ReactNode;
    className?: string;
}

const MainLayout = (props: IProps) => {
    return <main className={props.className}>{props.children}</main>;
};

export default MainLayout;
