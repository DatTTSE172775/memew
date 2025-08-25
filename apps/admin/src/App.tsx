import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Badge } from "./components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";

function App() {
  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-center text-foreground">
                MEMEW Theme Demo - Admin App
              </CardTitle>
              <p className="text-center text-muted-foreground text-sm">
                Shadcn UI với hệ màu MEMEW (Vite + Tailwind v4)
              </p>
            </div>
            <Button onClick={toggleTheme} variant="outline" className="ml-4">
              🌙 Toggle Theme
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Test Input */}
          <div className="space-y-2">
            <Label htmlFor="test-input">Test Input</Label>
            <Input id="test-input" placeholder="Nhập gì đó để test..." />
          </div>

          {/* Test Buttons */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Buttons</h3>
            <div className="flex gap-2 flex-wrap">
              <Button variant="default">Primary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="destructive">Destructive Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </div>

          {/* Test Custom Button Utilities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Custom Button Utilities
            </h3>
            <div className="flex gap-2 flex-wrap">
              <button className="btn btn-primary">Custom Primary</button>
              <button className="btn btn-secondary">Custom Secondary</button>
              <button className="btn btn-outline">Custom Outline</button>
              <button className="btn btn-destructive">
                Custom Destructive
              </button>
            </div>
          </div>

          {/* Test Badges */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Badges</h3>
            <div className="flex gap-2 flex-wrap">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="badge badge-success">Success</span>
              <span className="badge badge-warning">Warning</span>
              <span className="badge badge-info">Info</span>
            </div>
          </div>

          {/* Test Alerts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Alerts</h3>
            <div className="space-y-3">
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
            </div>
          </div>

          {/* Test Custom Form Control */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Custom Form Control
            </h3>
            <input
              type="text"
              className="form-control"
              placeholder="Test form-control utility với theme MEMEW"
            />
          </div>

          {/* Test Color Palette */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Color Palette
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-primary rounded-lg border"></div>
                <p className="text-sm font-medium text-center">Primary</p>
                <p className="text-xs text-muted-foreground text-center">
                  #FF914D
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-secondary rounded-lg border"></div>
                <p className="text-sm font-medium text-center">Secondary</p>
                <p className="text-xs text-muted-foreground text-center">
                  #6A0DAD
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-accent rounded-lg border"></div>
                <p className="text-sm font-medium text-center">Accent</p>
                <p className="text-xs text-muted-foreground text-center">
                  #EEDBFF
                </p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-destructive rounded-lg border"></div>
                <p className="text-sm font-medium text-center">Destructive</p>
                <p className="text-xs text-muted-foreground text-center">
                  #EF4444
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
