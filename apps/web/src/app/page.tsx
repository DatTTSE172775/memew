import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-foreground">
            MEMEW Theme Demo
          </CardTitle>
          <p className="text-center text-muted-foreground text-sm">
            Shadcn UI với hệ màu MEMEW
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="test-input">Test Input</Label>
            <Input id="test-input" placeholder="Nhập gì đó để test..." />
          </div>

          <div className="flex gap-2">
            <Button variant="default">Primary</Button>
            <Button variant="outline">Outline</Button>
          </div>

          <div className="flex gap-2">
            <Button variant="secondary" size="sm">
              Secondary
            </Button>
            <Button variant="destructive" size="sm">
              Destructive
            </Button>
          </div>

          <div className="flex gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>

          <Link href="/theme" className="block">
            <Button className="w-full" variant="ghost">
              🎨 Xem Theme Preview
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
