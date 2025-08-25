export function ColorTest() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Color Test - MEMEW Theme</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-primary text-primary-foreground rounded-lg text-center">
          Primary
        </div>
        <div className="p-4 bg-secondary text-secondary-foreground rounded-lg text-center">
          Secondary
        </div>
        <div className="p-4 bg-accent text-accent-foreground rounded-lg text-center">
          Accent
        </div>
        <div className="p-4 bg-destructive text-destructive-foreground rounded-lg text-center">
          Destructive
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 bg-success text-white rounded-lg text-center">
          Success
        </div>
        <div className="p-4 bg-warning text-white rounded-lg text-center">
          Warning
        </div>
        <div className="p-4 bg-info text-white rounded-lg text-center">
          Info
        </div>
      </div>

      <div className="p-4 bg-background border border-border rounded-lg">
        <p className="text-foreground">Background & Foreground</p>
        <p className="text-muted-foreground">Muted Foreground</p>
      </div>
    </div>
  );
}
