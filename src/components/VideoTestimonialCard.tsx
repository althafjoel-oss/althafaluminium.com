import { Card } from "@/components/ui/card";
const VideoTestimonialCard = () => {
  return <Card className="w-full md:w-3/4 mx-auto bg-card shadow-medium rounded-2xl p-4 md:p-6 text-center animate-fade-in">
      <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
        Client Video Testimonial
      </h3>
      
      {/* Video Container with 16:9 aspect ratio */}
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl mb-4">
        <iframe src="https://www.youtube.com/embed/P0M8IG1Z28w?si=0hy6cMhHm5OKSQ2q" title="YouTube video player" className="absolute top-0 left-0 w-full h-full rounded-xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      
      {/* Client Info */}
      
      
      {/* Caption */}
      <p className="mt-3 italic text-muted-foreground">
        See what our happy clients have to say!
      </p>
    </Card>;
};
export default VideoTestimonialCard;