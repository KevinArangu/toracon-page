import Counter from "@/components/common/Counter"
import Container from "@/components/layout/Container";

export default function Home() {
  return (
    <>
      <div className="h-80 w-full bg-gray-300">HERO</div>

      <Container className="space-y-8 my-8">
        <div className="h-72 w-full bg-gray-200 rounded-md flex flex-col lg:space-x-4 lg:flex-row">
          <div className="w-96 h-full bg-gray-300 rounded-md">IMAGE</div>
          <div className="flex-1">TEXT</div>
        </div>

        <div className="h-72 w-full bg-gray-200 rounded-md flex flex-col lg:space-x-4 lg:flex-row-reverse">
          <div className="flex-1">TEXT</div>
          <div className="w-96 h-full bg-gray-300 rounded-md">IMAGE</div>
        </div>

        <div className="h-72 w-full bg-gray-200 rounded-md flex flex-col lg:space-x-4 lg:flex-row">
          <div className="w-96 h-full bg-gray-300 rounded-md">IMAGE</div>
          <div className="flex-1">TEXT</div>
        </div>
      </Container>
    </>
  )
}
