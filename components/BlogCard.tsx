import Link from 'next/link';

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  author?: string;
  created_at?: string;
  featured_image?: string;
}

const categoryColors: Record<string, string> = {
  'Fashion Photography': 'bg-gold/10 text-gold border-gold/20',
  'Digital Cataloging': 'bg-blue-900/30 text-blue-300 border-blue-500/20',
  'Brand Strategy': 'bg-burgundy/20 text-pink-300 border-burgundy/30',
  'Social Media': 'bg-purple-900/30 text-purple-300 border-purple-500/20',
  'Business Strategy': 'bg-green-900/30 text-green-300 border-green-500/20',
};

export default function BlogCard({ title, slug, excerpt, category, author, created_at }: BlogCardProps) {
  const colorClass = category ? (categoryColors[category] || 'bg-gold/10 text-gold border-gold/20') : 'bg-gold/10 text-gold border-gold/20';

  const formattedDate = created_at
    ? new Date(created_at).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <Link href={`/blog/${slug}`} className="blog-card group block">
      {/* Image Placeholder */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-charcoal to-[#16213e]">
        <div className="absolute inset-0 pattern-overlay opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-20">
            {category === 'Fashion Photography' ? '📸' :
             category === 'Digital Cataloging' ? '📂' :
             category === 'Brand Strategy' ? '🎯' :
             category === 'Social Media' ? '🎬' : '📊'}
          </span>
        </div>
        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-medium rounded-full border ${colorClass}`}>
              {category}
            </span>
          </div>
        )}
        {/* Gold gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-lg font-bold text-cream mb-3 leading-tight group-hover:text-gold transition-colors line-clamp-2">
          {title}
        </h3>
        {excerpt && (
          <p className="text-cream/60 text-sm leading-relaxed mb-4 line-clamp-3">
            {excerpt}
          </p>
        )}

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-gold/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center text-xs font-bold text-gold">
              {author ? author.charAt(0) : 'H'}
            </div>
            <span className="text-cream/50 text-xs">{author || 'Heritage Apparels'}</span>
          </div>
          {formattedDate && (
            <span className="text-cream/30 text-xs">{formattedDate}</span>
          )}
        </div>

        {/* Read more */}
        <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
          Read Article
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
