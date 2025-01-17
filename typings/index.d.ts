import { Plugin } from 'vue';
export { default as DraggableContainer } from './components/DraggableContainer';
declare const _default: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        initW: {
            type: NumberConstructor;
            default: any;
        };
        initH: {
            type: NumberConstructor;
            default: any;
        };
        w: {
            type: NumberConstructor;
            default: number;
        };
        h: {
            type: NumberConstructor;
            default: number;
        };
        x: {
            type: NumberConstructor;
            default: number;
        };
        y: {
            type: NumberConstructor;
            default: number;
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        resizable: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledX: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledY: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledW: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledH: {
            type: BooleanConstructor;
            default: boolean;
        };
        minW: {
            type: NumberConstructor;
            default: number;
        };
        minH: {
            type: NumberConstructor;
            default: number;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        parent: {
            type: BooleanConstructor;
            default: boolean;
        };
        handles: {
            type: ArrayConstructor;
            default: import("./components/types").ResizingHandle[];
            validator: (handles: import("./components/types").ResizingHandle[]) => boolean;
        };
        classNameDraggable: {
            type: StringConstructor;
            default: string;
        };
        classNameResizable: {
            type: StringConstructor;
            default: string;
        };
        classNameDragging: {
            type: StringConstructor;
            default: string;
        };
        classNameResizing: {
            type: StringConstructor;
            default: string;
        };
        classNameActive: {
            type: StringConstructor;
            default: string;
        };
        classNameHandle: {
            type: StringConstructor;
            default: string;
        };
        lockAspectRatio: {
            type: BooleanConstructor;
            default: boolean;
        };
        parentScaleX: {
            type: NumberConstructor;
            default: number;
        };
        parentScaleY: {
            type: NumberConstructor;
            default: number;
        };
        triggerKey: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        handlesFiltered: import("vue").ComputedRef<import("./components/types").ResizingHandle[]>;
        resizeHandleDown: (e: MouseEvent | TouchEvent, handleType: import("./components/types").ResizingHandle) => void;
        setWidth(val: number): number;
        setHeight(val: number): number;
        setTop(val: number): number;
        setLeft(val: number): number;
        minWidth: import("vue").ComputedRef<number>;
        minHeight: import("vue").ComputedRef<number>;
        maxWidth: import("vue").ComputedRef<number>;
        maxHeight: import("vue").ComputedRef<number>;
        minLeft: import("vue").ComputedRef<number>;
        minTop: import("vue").ComputedRef<number>;
        maxLeft: import("vue").ComputedRef<number>;
        maxTop: import("vue").ComputedRef<number>;
        parentWidth: import("vue").Ref<number, number>;
        parentHeight: import("vue").Ref<number, number>;
        id: string;
        width: import("vue").Ref<number, number>;
        height: import("vue").Ref<number, number>;
        top: import("vue").Ref<number, number>;
        left: import("vue").Ref<number, number>;
        enable: import("vue").Ref<boolean, boolean>;
        dragging: import("vue").Ref<boolean, boolean>;
        resizing: import("vue").Ref<boolean, boolean>;
        resizingHandle: import("vue").Ref<import("./components/types").ResizingHandle, import("./components/types").ResizingHandle>;
        resizingMaxHeight: import("vue").Ref<number, number>;
        resizingMaxWidth: import("vue").Ref<number, number>;
        resizingMinWidth: import("vue").Ref<number, number>;
        resizingMinHeight: import("vue").Ref<number, number>;
        aspectRatio: import("vue").ComputedRef<number>;
        parentScaleX: import("vue").Ref<number, number>;
        parentScaleY: import("vue").Ref<number, number>;
        triggerKey: import("vue").Ref<"left" | "right", "left" | "right">;
        setEnable: (value: boolean) => boolean;
        setDragging: (value: boolean) => boolean;
        setResizing: (value: boolean) => boolean;
        setResizingHandle: (value: import("./components/types").ResizingHandle) => import("./components/types").ResizingHandle;
        setResizingMaxHeight: (value: number) => number;
        setResizingMaxWidth: (value: number) => number;
        setResizingMinWidth: (value: number) => number;
        setResizingMinHeight: (value: number) => number;
        $setWidth: (val: number) => number;
        $setHeight: (val: number) => number;
        $setTop: (val: number) => number;
        $setLeft: (val: number) => number;
        containerRef: import("vue").Ref<HTMLElement, HTMLElement>;
        containerProvider: import("./components/types").ContainerProvider;
    }, {}, {
        style(): {
            [propName: string]: string;
        };
        klass(): {
            [propName: string]: string | boolean;
        };
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], import("vue").PublicProps, {
        active: boolean;
        x: number;
        y: number;
        w: number;
        h: number;
        parentScaleX: number;
        parentScaleY: number;
        triggerKey: string;
        draggable: boolean;
        resizable: boolean;
        initW: number;
        initH: number;
        disabledX: boolean;
        disabledY: boolean;
        disabledW: boolean;
        disabledH: boolean;
        minW: number;
        minH: number;
        parent: boolean;
        handles: unknown[];
        classNameDraggable: string;
        classNameResizable: string;
        classNameDragging: string;
        classNameResizing: string;
        classNameActive: string;
        classNameHandle: string;
        lockAspectRatio: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        initW: {
            type: NumberConstructor;
            default: any;
        };
        initH: {
            type: NumberConstructor;
            default: any;
        };
        w: {
            type: NumberConstructor;
            default: number;
        };
        h: {
            type: NumberConstructor;
            default: number;
        };
        x: {
            type: NumberConstructor;
            default: number;
        };
        y: {
            type: NumberConstructor;
            default: number;
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        resizable: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledX: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledY: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledW: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabledH: {
            type: BooleanConstructor;
            default: boolean;
        };
        minW: {
            type: NumberConstructor;
            default: number;
        };
        minH: {
            type: NumberConstructor;
            default: number;
        };
        active: {
            type: BooleanConstructor;
            default: boolean;
        };
        parent: {
            type: BooleanConstructor;
            default: boolean;
        };
        handles: {
            type: ArrayConstructor;
            default: import("./components/types").ResizingHandle[];
            validator: (handles: import("./components/types").ResizingHandle[]) => boolean;
        };
        classNameDraggable: {
            type: StringConstructor;
            default: string;
        };
        classNameResizable: {
            type: StringConstructor;
            default: string;
        };
        classNameDragging: {
            type: StringConstructor;
            default: string;
        };
        classNameResizing: {
            type: StringConstructor;
            default: string;
        };
        classNameActive: {
            type: StringConstructor;
            default: string;
        };
        classNameHandle: {
            type: StringConstructor;
            default: string;
        };
        lockAspectRatio: {
            type: BooleanConstructor;
            default: boolean;
        };
        parentScaleX: {
            type: NumberConstructor;
            default: number;
        };
        parentScaleY: {
            type: NumberConstructor;
            default: number;
        };
        triggerKey: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        handlesFiltered: import("vue").ComputedRef<import("./components/types").ResizingHandle[]>;
        resizeHandleDown: (e: MouseEvent | TouchEvent, handleType: import("./components/types").ResizingHandle) => void;
        setWidth(val: number): number;
        setHeight(val: number): number;
        setTop(val: number): number;
        setLeft(val: number): number;
        minWidth: import("vue").ComputedRef<number>;
        minHeight: import("vue").ComputedRef<number>;
        maxWidth: import("vue").ComputedRef<number>;
        maxHeight: import("vue").ComputedRef<number>;
        minLeft: import("vue").ComputedRef<number>;
        minTop: import("vue").ComputedRef<number>;
        maxLeft: import("vue").ComputedRef<number>;
        maxTop: import("vue").ComputedRef<number>;
        parentWidth: import("vue").Ref<number, number>;
        parentHeight: import("vue").Ref<number, number>;
        id: string;
        width: import("vue").Ref<number, number>;
        height: import("vue").Ref<number, number>;
        top: import("vue").Ref<number, number>;
        left: import("vue").Ref<number, number>;
        enable: import("vue").Ref<boolean, boolean>;
        dragging: import("vue").Ref<boolean, boolean>;
        resizing: import("vue").Ref<boolean, boolean>;
        resizingHandle: import("vue").Ref<import("./components/types").ResizingHandle, import("./components/types").ResizingHandle>;
        resizingMaxHeight: import("vue").Ref<number, number>;
        resizingMaxWidth: import("vue").Ref<number, number>;
        resizingMinWidth: import("vue").Ref<number, number>;
        resizingMinHeight: import("vue").Ref<number, number>;
        aspectRatio: import("vue").ComputedRef<number>;
        parentScaleX: import("vue").Ref<number, number>;
        parentScaleY: import("vue").Ref<number, number>;
        triggerKey: import("vue").Ref<"left" | "right", "left" | "right">;
        setEnable: (value: boolean) => boolean;
        setDragging: (value: boolean) => boolean;
        setResizing: (value: boolean) => boolean;
        setResizingHandle: (value: import("./components/types").ResizingHandle) => import("./components/types").ResizingHandle;
        setResizingMaxHeight: (value: number) => number;
        setResizingMaxWidth: (value: number) => number;
        setResizingMinWidth: (value: number) => number;
        setResizingMinHeight: (value: number) => number;
        $setWidth: (val: number) => number;
        $setHeight: (val: number) => number;
        $setTop: (val: number) => number;
        $setLeft: (val: number) => number;
        containerRef: import("vue").Ref<HTMLElement, HTMLElement>;
        containerProvider: import("./components/types").ContainerProvider;
    }, {}, {
        style(): {
            [propName: string]: string;
        };
        klass(): {
            [propName: string]: string | boolean;
        };
    }, {}, {
        active: boolean;
        x: number;
        y: number;
        w: number;
        h: number;
        parentScaleX: number;
        parentScaleY: number;
        triggerKey: string;
        draggable: boolean;
        resizable: boolean;
        initW: number;
        initH: number;
        disabledX: boolean;
        disabledY: boolean;
        disabledW: boolean;
        disabledH: boolean;
        minW: number;
        minH: number;
        parent: boolean;
        handles: unknown[];
        classNameDraggable: string;
        classNameResizable: string;
        classNameDragging: string;
        classNameResizing: string;
        classNameActive: string;
        classNameHandle: string;
        lockAspectRatio: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    initW: {
        type: NumberConstructor;
        default: any;
    };
    initH: {
        type: NumberConstructor;
        default: any;
    };
    w: {
        type: NumberConstructor;
        default: number;
    };
    h: {
        type: NumberConstructor;
        default: number;
    };
    x: {
        type: NumberConstructor;
        default: number;
    };
    y: {
        type: NumberConstructor;
        default: number;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledX: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledY: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledW: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledH: {
        type: BooleanConstructor;
        default: boolean;
    };
    minW: {
        type: NumberConstructor;
        default: number;
    };
    minH: {
        type: NumberConstructor;
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    parent: {
        type: BooleanConstructor;
        default: boolean;
    };
    handles: {
        type: ArrayConstructor;
        default: import("./components/types").ResizingHandle[];
        validator: (handles: import("./components/types").ResizingHandle[]) => boolean;
    };
    classNameDraggable: {
        type: StringConstructor;
        default: string;
    };
    classNameResizable: {
        type: StringConstructor;
        default: string;
    };
    classNameDragging: {
        type: StringConstructor;
        default: string;
    };
    classNameResizing: {
        type: StringConstructor;
        default: string;
    };
    classNameActive: {
        type: StringConstructor;
        default: string;
    };
    classNameHandle: {
        type: StringConstructor;
        default: string;
    };
    lockAspectRatio: {
        type: BooleanConstructor;
        default: boolean;
    };
    parentScaleX: {
        type: NumberConstructor;
        default: number;
    };
    parentScaleY: {
        type: NumberConstructor;
        default: number;
    };
    triggerKey: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    handlesFiltered: import("vue").ComputedRef<import("./components/types").ResizingHandle[]>;
    resizeHandleDown: (e: MouseEvent | TouchEvent, handleType: import("./components/types").ResizingHandle) => void;
    setWidth(val: number): number;
    setHeight(val: number): number;
    setTop(val: number): number;
    setLeft(val: number): number;
    minWidth: import("vue").ComputedRef<number>;
    minHeight: import("vue").ComputedRef<number>;
    maxWidth: import("vue").ComputedRef<number>;
    maxHeight: import("vue").ComputedRef<number>;
    minLeft: import("vue").ComputedRef<number>;
    minTop: import("vue").ComputedRef<number>;
    maxLeft: import("vue").ComputedRef<number>;
    maxTop: import("vue").ComputedRef<number>;
    parentWidth: import("vue").Ref<number, number>;
    parentHeight: import("vue").Ref<number, number>;
    id: string;
    width: import("vue").Ref<number, number>;
    height: import("vue").Ref<number, number>;
    top: import("vue").Ref<number, number>;
    left: import("vue").Ref<number, number>;
    enable: import("vue").Ref<boolean, boolean>;
    dragging: import("vue").Ref<boolean, boolean>;
    resizing: import("vue").Ref<boolean, boolean>;
    resizingHandle: import("vue").Ref<import("./components/types").ResizingHandle, import("./components/types").ResizingHandle>;
    resizingMaxHeight: import("vue").Ref<number, number>;
    resizingMaxWidth: import("vue").Ref<number, number>;
    resizingMinWidth: import("vue").Ref<number, number>;
    resizingMinHeight: import("vue").Ref<number, number>;
    aspectRatio: import("vue").ComputedRef<number>;
    parentScaleX: import("vue").Ref<number, number>;
    parentScaleY: import("vue").Ref<number, number>;
    triggerKey: import("vue").Ref<"left" | "right", "left" | "right">;
    setEnable: (value: boolean) => boolean;
    setDragging: (value: boolean) => boolean;
    setResizing: (value: boolean) => boolean;
    setResizingHandle: (value: import("./components/types").ResizingHandle) => import("./components/types").ResizingHandle;
    setResizingMaxHeight: (value: number) => number;
    setResizingMaxWidth: (value: number) => number;
    setResizingMinWidth: (value: number) => number;
    setResizingMinHeight: (value: number) => number;
    $setWidth: (val: number) => number;
    $setHeight: (val: number) => number;
    $setTop: (val: number) => number;
    $setLeft: (val: number) => number;
    containerRef: import("vue").Ref<HTMLElement, HTMLElement>;
    containerProvider: import("./components/types").ContainerProvider;
}, {}, {
    style(): {
        [propName: string]: string;
    };
    klass(): {
        [propName: string]: string | boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, {
    active: boolean;
    x: number;
    y: number;
    w: number;
    h: number;
    parentScaleX: number;
    parentScaleY: number;
    triggerKey: string;
    draggable: boolean;
    resizable: boolean;
    initW: number;
    initH: number;
    disabledX: boolean;
    disabledY: boolean;
    disabledW: boolean;
    disabledH: boolean;
    minW: number;
    minH: number;
    parent: boolean;
    handles: unknown[];
    classNameDraggable: string;
    classNameResizable: string;
    classNameDragging: string;
    classNameResizing: string;
    classNameActive: string;
    classNameHandle: string;
    lockAspectRatio: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin<any[]>;
export default _default;
