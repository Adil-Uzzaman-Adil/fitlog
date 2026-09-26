export default function Logo({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#ccff00" />
      <path
        d="M17.5 6L9 18h6l-1.5 8L23 14h-6l0.5-8z"
        fill="#0a0a0a"
        stroke="#0a0a0a"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}