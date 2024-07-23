const SidebarIcon = ({ color = '#fff' }: { color?: string }) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 5H8"
          stroke={color}
          strokeWidth="2.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 12H4"
          stroke={color}
          strokeWidth="2.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 19H12"
          stroke={color}
          strokeWidth="2.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
};

export default SidebarIcon;