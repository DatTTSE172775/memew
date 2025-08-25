export function UtilityTest() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Utility Test - MEMEW Theme</h2>

      {/* Test Tailwind utilities */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Tailwind Utilities</h3>
        <div className="bg-primary text-primary-foreground p-4 rounded-md">
          Test Primary: bg-primary text-primary-foreground
        </div>
        <div className="bg-secondary text-secondary-foreground p-4 rounded-md">
          Test Secondary: bg-secondary text-secondary-foreground
        </div>
        <div className="bg-accent text-accent-foreground p-4 rounded-md">
          Test Accent: bg-accent text-accent-foreground
        </div>
      </div>

      {/* Test Custom Button utilities */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Button Utilities</h3>
        <div className="flex gap-2 flex-wrap">
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
          <button className="btn btn-outline">Outline Button</button>
          <button className="btn btn-destructive">Destructive Button</button>
        </div>
      </div>

      {/* Test Custom Form utilities */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Form Utilities</h3>
        <input
          type="text"
          className="form-control"
          placeholder="Test form-control utility"
        />
      </div>

      {/* Test Custom Alert utilities */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Alert Utilities</h3>
        <div className="alert">Default Alert: Thông tin chung</div>
        <div className="alert alert-error">Error Alert: Thông báo lỗi</div>
        <div className="alert alert-success">
          Success Alert: Thông báo thành công
        </div>
        <div className="alert alert-info">Info Alert: Thông tin chi tiết</div>
      </div>

      {/* Test Custom Badge utilities */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Badge Utilities</h3>
        <div className="flex gap-2 flex-wrap">
          <span className="badge badge-success">Success</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-info">Info</span>
        </div>
      </div>
    </div>
  );
}
