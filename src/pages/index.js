import Counter from "@/components/common/Counter"
import Container from "@/components/layout/Container";

export default function Home() {
  return
  <>
    <div className="h-72 w-full bg-gray-300">HERO</div>
    <Container className="space-y-4 mt-4">
      <div className="h-48 w-full bg-gray-200">CONTENT</div>
      <div className="h-48 w-full bg-gray-200">CONTENT</div>
      <div className="h-48 w-full bg-gray-200">CONTENT</div>
    </Container>
  </>
}
