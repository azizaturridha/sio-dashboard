export default function GA4Cards() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      <div className="rounded-xl border p-6">
        <h3 className="text-gray-500">Users</h3>
        <p className="text-3xl font-bold">
          171,373
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="text-gray-500">Sessions</h3>
        <p className="text-3xl font-bold">
          187,509
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="text-gray-500">Page Views</h3>
        <p className="text-3xl font-bold">
          214,480
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="text-gray-500">Engagement Rate</h3>
        <p className="text-3xl font-bold">
          26.91%
        </p>
      </div>
    </div>
  );
}