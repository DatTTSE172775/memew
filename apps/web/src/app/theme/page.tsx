import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { ThemeDemo } from "@/components/theme-demo";
import { ColorTest } from "@/components/color-test";
import { UtilityTest } from "@/components/utility-test";

export default function ThemePage() {
  return (
    <main className="p-6 space-y-6 min-h-screen bg-background">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            MEMEW Theme Preview
          </h1>
          <p className="text-muted-foreground mt-2">
            Kiểm tra các component với theme MEMEW
          </p>
        </div>
        <ThemeToggle />
      </div>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
          </CardHeader>
          <CardContent className="space-x-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inputs & Badges</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Placeholder text..." />
            <div className="space-x-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert>
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>
                Thông tin chung theo màu semantic.
              </AlertDescription>
            </Alert>
            <Alert className="border-destructive/40 bg-destructive/5">
              <AlertTitle className="text-destructive">Error</AlertTitle>
              <AlertDescription>
                Thông báo lỗi & màu nguy hiểm.
              </AlertDescription>
            </Alert>
            <Alert className="border-success/40 bg-success/5">
              <AlertTitle className="text-success">Success</AlertTitle>
              <AlertDescription>Thông báo thành công.</AlertDescription>
            </Alert>
            <Alert className="border-warning/40 bg-warning/5">
              <AlertTitle className="text-warning">Warning</AlertTitle>
              <AlertDescription>Cảnh báo quan trọng.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Color Palette</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-20 bg-primary rounded-lg border"></div>
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs text-muted-foreground">#FF914D</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-secondary rounded-lg border"></div>
                <p className="text-sm font-medium">Secondary</p>
                <p className="text-xs text-muted-foreground">#6A0DAD</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-accent rounded-lg border"></div>
                <p className="text-sm font-medium">Accent</p>
                <p className="text-xs text-muted-foreground">#EEDBFF</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-destructive rounded-lg border"></div>
                <p className="text-sm font-medium">Destructive</p>
                <p className="text-xs text-muted-foreground">#EF4444</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <ThemeDemo />
        </div>

        <div className="md:col-span-2">
          <ColorTest />
        </div>

        <div className="md:col-span-2">
          <UtilityTest />
        </div>
      </section>
    </main>
  );
}
