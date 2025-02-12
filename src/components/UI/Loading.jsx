import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LoadingGIF from '../../asset/loading.lottie'

const Loading = () => {
  return (
    <div>
        <DotLottieReact
        src={LoadingGIF}
        loop
        autoplay
        />
    </div>
    
  );
};

export default Loading;
