package com.touchthroughviewissue;

import com.facebook.react.ReactActivity;
import android.view.MotionEvent;
import com.rome2rio.android.reactnativetouchthroughview.TouchThroughTouchHandlerInterface;
import com.rome2rio.android.reactnativetouchthroughview.TouchThroughTouchHandler;

public class MainActivity extends ReactActivity {

    private TouchThroughTouchHandler touchThroughTouchHandler = new TouchThroughTouchHandler();

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "touchThroughViewIssue";
    }


    public TouchThroughTouchHandler getTouchThroughTouchHandler() {
        return touchThroughTouchHandler;
    }

    @Override
    public boolean dispatchTouchEvent(MotionEvent ev) {
        touchThroughTouchHandler.handleTouchEvent(ev);

        return super.dispatchTouchEvent(ev);
    }

}
