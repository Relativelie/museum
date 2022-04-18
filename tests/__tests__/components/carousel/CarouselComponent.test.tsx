import { act, create } from 'react-test-renderer';
import { CarouselComponent } from '../../../../src/components/carousel/CarouselComponent';

describe('Carousel component', () => {
    test('snapshot - carousel component', () => {
        let root: any;
        act(() => {
            root = create(<CarouselComponent />);
        });
        expect(root.toJSON()).toMatchSnapshot();
    });
});
