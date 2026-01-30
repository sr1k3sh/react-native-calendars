import { RefObject } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';
interface UseTimelineOffsetProps {
    onChangeOffset?: (offset: number) => void;
    scrollOffset?: number;
    scrollViewRef: RefObject<ScrollView>;
}
declare const _default: (props: UseTimelineOffsetProps) => {
    scrollEvents: {
        onScrollEndDrag: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
        onMomentumScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    };
};
export default _default;
//# sourceMappingURL=useTimelineOffset.d.ts.map