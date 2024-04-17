"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();
  return (
    <Container>
      <div className="mt-9">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          The Starter Template
        </h1>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          Come let build a starter template and make something worth the ages
        </blockquote>
      </div>
      <div className="my-6">
        <Button
          variant="secondary"
          onClick={() => {
            toast({
              title: "Date of the Year",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          Discover
        </Button>
      </div>
    </Container>
  );
}
