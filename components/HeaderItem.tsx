interface HeaderItemProps {
  title: string;
  Icon: any;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ title, Icon }) => {
  return (
    <div className='group flex flex-col items-center w-12 sm:w-20 hover:text-white cursor-pointer'>
      <Icon className='mb-1 h-8 group-hover:animate-bounce' />
      <p className='opacity-0 uppercase group-hover:opacity-100 tracking-widest'>
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
