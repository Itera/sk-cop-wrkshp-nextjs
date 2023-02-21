import Link from "next/link";

export default function MainMenu() {
  return (
    <nav>
      <ul>
        <LinkEntry href="/" label="Home"/>
        <LinkEntry href="/menu" label="Menu" />
      </ul>
    </nav>
  );
}

interface LinkEntryProps {
  href: string;
  label: string;
}

function LinkEntry({ href, label }: LinkEntryProps) {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
}
