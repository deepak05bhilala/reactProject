import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "I'm Sorry, Pragya",
  description: 'A sincere apology',
};

export default function SorryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
