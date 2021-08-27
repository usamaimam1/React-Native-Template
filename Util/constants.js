import { PixelRatio, Dimensions, StyleSheet } from 'react-native';
// const { width, height } = Dimensions.get('window');
import { widthPercentageToDP as widthValue, heightPercentageToDP as heightValue } from 'react-native-responsive-screen'
const WIDTH = 375
const HEIGHT = 812

// const guidelineBaseWidth = 350;
// const guidelineBaseHeight = 680;

export const scale = size => Dimensions.get("window").width / WIDTH * size;
export const verticalScale = size => Dimensions.get("window").height / HEIGHT * size;
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export const widthPercentage = (width = 0) => {
    return `${width / WIDTH * 100}%`
}

export const heightPercentage = (height = 0) => {
    return `${height / HEIGHT * 100}%`
}

export const screenwiseHeightPercentage = (height = 0) => {
    return heightValue(height / HEIGHT * 100)
}

export const screenwiseWidthPercentage = (width = 0) => {
    return widthValue(width / WIDTH * 100)
}

export const create = (
    styles,
    targetProperties = [
        'fontSize',
        'margin',
        'marginHorizontal',
        'marginVertical',
        'padding',
        'paddingVertical',
        'paddingHorizontal',
        'height',
    ]
) => {
    const normalizedStyles = {};
    Object.keys(styles).forEach((key) => {
        normalizedStyles[key] = {};
        Object.keys(styles[key]).forEach((property) => {
            if (targetProperties.includes(property)) {
                normalizedStyles[key][property] = normalize(styles[key][property]);
            } else {
                normalizedStyles[key][property] = styles[key][property];
            }
        });
    });

    return StyleSheet.create(normalizedStyles);
};

export const normalize = function (size, screenheight) {
    const { width, height } = Dimensions.get('window');
    const ratio = PixelRatio.get();
    if (ratio >= 2 && ratio < 3) {
        if (width < 360) {
            return size * 0.95;
        } else if (height < 667) {
            return size;
        } else if (height >= 667 && height <= 735) {
            return size * 1.15;
        }

        return size * 1.25;
    } else if (ratio >= 3 && ratio < 3.5) {
        if (width < 360) {
            return size;
        } else if (height < 667) {
            return size * 1.15;
        } else if (height >= 667 && height <= 735) {
            return size * 1.2;
        }

        return size * 1.27;
    } else if (ratio >= 3.5) {
        if (width < 360) {
            return size;
        } else if (height < 667) {
            return size * 1.2;
        } else if (height >= 667 && height <= 735) {
            return size * 1.25;
        }

        return size * 1.4;
    }
    return size;
};

export const FONTS = {}
export const THEME = {}
