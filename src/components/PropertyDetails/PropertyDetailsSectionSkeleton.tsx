const PropertyDetailsSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div>
        <div className="h-8 w-2/3 rounded bg-slate-200 animate-pulse" />
        <div className="mt-1 h-4 w-1/2 rounded bg-slate-200 animate-pulse" />
      </div>

      <div>
        <div className="h-3 w-40 rounded bg-slate-200 animate-pulse" />
        <div className="mt-1 h-6 w-50 rounded bg-slate-200 animate-pulse" />
      </div>

      <div>
        <div className="h-3 w-40 rounded bg-slate-200 animate-pulse" />
        <div className="mt-1 h-6 w-80 rounded bg-slate-200 animate-pulse" />
      </div>

      <div>
        <div className="h-3 w-40 rounded bg-slate-200 animate-pulse" />
        <div className="mt-2 h-5 w-10/12 rounded bg-slate-200 animate-pulse" />
        <div className="mt-2 h-5 w-10/12 rounded bg-slate-200 animate-pulse" />
        <div className="mt-2 h-5 w-10/12 rounded bg-slate-200 animate-pulse" />
        <div className="mt-2 h-5 w-6/12 rounded bg-slate-200 animate-pulse" />

        <div className="mt-6 h-5 w-10/12 rounded bg-slate-200 animate-pulse" />
        <div className="mt-2 h-5 w-10/12 rounded bg-slate-200 animate-pulse" />
        <div className="mt-2 h-5 w-5/12 rounded bg-slate-200 animate-pulse" />
      </div>

      <div>
        <div className="h-3 w-40 rounded bg-slate-200 animate-pulse" />
        <div className="mt-1 h-8 w-50 rounded bg-slate-200 animate-pulse" />
      </div>

      <div className="mt-8 h-14 w-60 rounded bg-slate-200 animate-pulse" />
    </div>
  )
}

export default PropertyDetailsSectionSkeleton
