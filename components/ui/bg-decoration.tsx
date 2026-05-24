export function BgDecoration() {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Mesh Gradients */}
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -bottom-[10%] left-[20%] h-[40%] w-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
        
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03] invert" />
      </div>
    )
  }