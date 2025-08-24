import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            Test Shadcn UI Components
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="test-input">Test Input</Label>
            <Input id="test-input" placeholder="Nhập gì đó để test..." />
          </div>

          <div className="flex gap-2">
            <Button variant="default">Primary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>

          <div className="flex gap-2">
            <Button variant="secondary" size="sm">
              Small Button
            </Button>
            <Button variant="destructive" size="lg">
              Destructive Button
            </Button>
          </div>

          <Button className="w-full" variant="ghost">
            Full Width Ghost Button
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
