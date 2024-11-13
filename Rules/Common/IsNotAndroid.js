export default function IsNotAndroid(context) {
    if (context.nativescript.platformModule.isAndroid) {
        return false;
    } else {
        return true;
    }
}
