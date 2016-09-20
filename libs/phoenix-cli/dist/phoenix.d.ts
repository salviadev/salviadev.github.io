/// <reference path="../typings/index.d.ts" />
declare namespace Phoenix {
    module utils {
        var Promise: any;
        var allocUuid: () => string;
        var allocID: () => string;
        var format: (...args: any[]) => any;
        var merge: (src: any, dst: any) => void;
        var formatNames: (value: string, params: any) => string;
        var extend: (dst: any, opts: any) => any;
        var logModule: (moduleName: string, value?: any) => any;
        var log: (value: any, moduleName: string) => void;
        var equals: (src: any, dst: any) => boolean;
        var copy: (src: any) => any;
        var deltaPatch: (oldValue: any, newValue: any) => any;
        var isNull: (value: any) => boolean;
        var isUndefined: (value: any) => boolean;
        var isNullOrUndefined: (value: any) => boolean;
        var escapeHtml: (value: string) => string;
        var phoenixPath: () => string;
        var parseExpression: (expression: string, context: Object) => string;
        var hasExpression: (expression: string) => boolean;
        var parseVariable: (path: string, value: Object) => string;
        var defineProperty: (propertyName: any, target: any) => void;
        var applyMixins: (derivedCtor: any, baseCtors: any[]) => void;
        var nextTick: any;
        var focusDelay: (fn: any) => void;
        var dataAsPromise: (ldata: any) => Promise<any>;
        var extractAngularVars: (expression: string, map: any[]) => string;
        var execAngularExpression: (expression: string, context: any, noExpand?: boolean) => string;
        var confirm: (title: any, message: any, success: any, cancel?: any) => void;
        var alert: (title: any, message: any, success: any) => void;
        var prompt: (title: string, defaultValue: string, success: (res: string) => void) => void;
        var cleanUpObject: (src: any) => void;
    }
}
declare namespace Phoenix {
    module external {
        var hashHandler: Function;
        var logoutHandler: Function;
        var forbiddenHandler: Function;
        var changePasswordHandler: Function;
        var checkLoggedInHandler: Function;
        var historyChangedHandler: Function;
        var preferenceLoadHandler: (name: string) => Promise<any>;
        var preferenceSaveHandler: (name: string, data: any) => Promise<void>;
    }
    module history {
        var removeLast: () => void;
        var add: (hash: any, reset: any) => void;
        var hasBack: () => boolean;
        var value: string[];
        var replaceHash: any;
    }
    module render {
        var register: (context: any, name: any, handler: any) => void;
        var get: (context: any, name: any) => any;
    }
    module ipc {
        var emit: (eventName: any, data: any) => void;
        var listen: (eventName: any, handler: any, listener: any) => void;
        var unlisten: (listener: any, eventName?: string) => void;
    }
}
declare namespace Phoenix {
    module utils {
        class Serial {
            private _eventList;
            private _inExec;
            constructor();
            execute(proc: any): void;
            private _execute();
        }
        class SingleEventBus {
            private currentEvent;
            defaultDelay: number;
            onError: Function;
            private _error;
            private _dispose;
            constructor(delay: any);
            private _errorHandler(error);
            clear(): void;
            _onEventDisposed(event: any): void;
            push(promise: any, onsuccess: any, nodelay: any): void;
            destroy(): void;
        }
        var GlbSerial: Serial;
    }
}
declare namespace Phoenix {
    var locale: any;
}
declare namespace Phoenix {
    module customData {
        var register: (namespace: string, value: any) => void;
        var get: (namespace: string) => any;
    }
}
declare namespace Phoenix {
    var device: {
        phone: boolean;
        tablet: boolean;
        deviceType: string;
    };
    var $mem: any;
    function save$mem(): void;
    function sessionPreferences(name: string, value?: any): any;
    function preferences(name: string, value?: any): any;
    var build: {
        version: string;
        release: boolean;
    };
}
declare namespace Phoenix {
    module authentication {
        var db: () => any;
        var save: (credentials: any, onlyCredentials?: boolean) => void;
        var load: () => any;
        var clear: () => void;
        var registerAfterLogout: (hnd: Function) => void;
    }
}
declare namespace Phoenix {
    module application {
        var angularApplication: any;
        var core: string;
        var name: string;
        var support: string;
        var homeName: string;
        var title: string;
        var licences: any;
        var configuration: any;
        function config(appName: string, cfg?: any): any;
        function init(appName: string, appTitle: string, config?: any): void;
        function portailName(): string;
        function isPortail(): boolean;
    }
}
declare namespace Phoenix {
    module ajax {
        var extractAjaxErrors: (ex: any) => any;
        var get: (lurl: string, options?: any, ondata?: any) => any;
        var getScript: (lurl: any) => any;
        var getDefaultAjaxOptions: () => any;
        var put: (lurl: any, data: any, options?: any) => any;
        var patch: (lurl: any, data: any, options?: any) => any;
        var post: (lurl: any, data: any, options?: any) => any;
        var remove: (lurl: any, options?: any) => any;
        var postAndDownload: (lurl: string, postData: any) => any;
        var loadScript: (name: any, lurl: any, after: any, loader: any) => any;
        var interceptError: (status: any, handler: any) => void;
        var activateInterceptError: (status: any, value: any) => void;
    }
}
declare namespace Phoenix {
    module ulocale {
        var register: (hnd: any) => void;
        var translate: (ll: any, lang: any) => void;
        var tt: (v: any, context: any) => any;
        var currentLang: string;
        var defCountry: string;
        var lang: string;
        var country: string;
        var money: (value: number, useSymbol: boolean) => any;
        var truncMoney: (value: number) => number;
        var decimal: (value: any, decimals: any, symbol: any) => any;
        var format: (desc: any, value: any) => any;
        var parseISODate: (value: any) => Date;
        var parseISODateAsUTC: (value: string) => number;
        var isoDatePart: (isoDate: string) => string;
        var shortDate: (date: any) => any;
        var longDate: (date: any) => any;
        var monthYear: (date: any) => any;
        var localeDate2ISO: (value: any) => string;
        var date2ISO: (value: any) => string;
        var string2Float: (value: any) => number;
        var localeTitle: (title: any) => any;
        function loadLocale(newLang: any): void;
    }
    module angularjs {
        var registerFilters: (app: any) => void;
    }
}
declare namespace Phoenix {
}
declare namespace Phoenix {
    var bootstrap4: boolean;
    module dom {
        var readyHandlers: (() => void)[];
        const keys: {
            VK_TAB: number;
            VK_UP: number;
            VK_DOWN: number;
            VK_INSERT: number;
            VK_DELETE: number;
            VK_LEFT: number;
            VK_RIGHT: number;
            VK_ENTER: number;
            VK_ESCAPE: number;
            VK_F1: number;
            VK_HOME: number;
            VK_END: number;
            VK_PGUP: number;
            VK_PGDOWN: number;
            VK_SPACE: number;
            VK_F2: number;
            VK_F3: number;
            VK_F4: number;
            VK_BACKSPACE: number;
            VK_F10: number;
        };
        var queryAll: (parent: HTMLElement, selector: any) => NodeList;
        var find: (parent: HTMLElement, id: string) => HTMLElement;
        var query: (parent: HTMLElement, selector: any) => HTMLElement;
        var addClass: (element: HTMLElement, className: string) => void;
        var removeClass: (element: HTMLElement, className: string) => void;
        var hasClass: (element: HTMLElement, className: string) => boolean;
        var icon: (iconName: string) => HTMLElement;
        var iconClass: (iconName: string, noPrefix?: boolean) => string;
        var customIconClass: (iconName: string, iconClass: string) => string;
        var iconPrefix: () => string;
        var bodyTheme: (value: string) => boolean;
        var offset: (element: Element) => ClientRect;
        var before: (child: Node, element: Node) => void;
        var after: (child: HTMLElement, element: HTMLElement) => void;
        var parentByTag: (root: HTMLElement, element: HTMLElement, tag: string) => HTMLElement;
        var parentByClass: (root: HTMLElement, element: HTMLElement, className: string) => HTMLElement;
        var indexOf: (parent: HTMLElement, child: HTMLElement) => number;
        var append: (parent: Node, element: Node) => void;
        var select: (input: any) => void;
        var empty: (element: HTMLElement) => void;
        var remove: (element: Node) => void;
        var detach: (element: HTMLElement) => HTMLElement;
        var attr: (element: HTMLElement, attr: string, value?: string) => any;
        var text: (node: Element, text?: string) => string;
        var findByAttribute: (el: any, root: any, attr: any) => any;
        var isChildOf: (parent: Node, child: Node) => boolean;
        var parseStyle: (style: any, css: any) => void;
        var ignoreKeys: number[];
        var processing: (value: any) => void;
        var inProcessing: () => boolean;
        var scrollbar: () => number;
        var documentScroll: () => {
            left: number;
            top: number;
        };
        var documentClientDim: () => {
            width: number;
            height: number;
        };
        var touch: () => boolean;
        var position: (element: HTMLElement, parent: HTMLElement) => {
            left: number;
            top: number;
        };
        var childrenPositions: (parent: HTMLElement, list: any[], vertical: boolean, zone: string, options: any) => any[];
        var findNearest: (x: any, y: any, elements: any) => any;
        var showMove: (res: HTMLElement, vertical: boolean, pos: {
            left: number;
            top: number;
            width: number;
            height: number;
        }, cssClass: string) => HTMLElement;
        var bootstrapStyles: {
            primary: string;
            secondary: string;
            default: string;
            important: string;
            success: string;
            info: string;
            danger: string;
            warning: string;
            link: string;
        };
    }
}
declare namespace Phoenix {
    module link {
        var search: (value: any, replace: any) => any;
        var object2search: (value: any) => string;
        var parseUrl: (value: string) => {
            path: string;
            search: any;
        };
        var hashLink: (cfg: any, data: any, params: any) => string;
        var pageName: (cfg: any) => any;
        var isCustomLink: (e: any, event: any, dontStopPropagation?: boolean) => {
            protocol: any;
            value: any;
        };
        var registerCustomProtocol: (protocol: any, handler: any) => void;
        var execCustomProtocol: (clink: any, context: any, config: any, params: any) => void;
        var isCustomProtocol: (href: any) => any;
        var doAuthoring: (pageName?: string, force?: boolean) => void;
        var doFormAuthoring: (params: any) => void;
        var setHash: (newhash: any, replace: any) => void;
        var execLink: (clink: any, context: any, params: any) => any;
        var context: (opts?: any) => {
            $url: any;
            $mem: any;
            $user: {
                name: any;
                firstName: any;
                lastName: any;
            };
            $item: any;
            $cookie: any;
        };
    }
}
declare namespace Phoenix {
}
declare namespace Phoenix {
    module data {
        var menu: {
            get: (menu: any, localization: any, appName: any) => any;
        };
    }
}
declare namespace Phoenix {
    module data {
        var schema: {
            get: (schema: string, localization: boolean, appName: string) => any;
        };
    }
}
declare namespace Phoenix {
    module data {
        var rest: {
            getRessources: (params: any, ondata: any) => any;
        };
    }
}
declare namespace Phoenix {
    module data {
        var local: {
            getRessources: (params: any, ondata: any) => any;
        };
    }
}
declare namespace Phoenix {
    module data {
        var odata: {
            v4: boolean;
            transport: {
                doPost: (lurl: any, data: any, options?: any) => any;
                doPut: (lurl: any, data: any, options?: any) => any;
                doDelete: (lurl: any, options?: any) => any;
                doGet: (lurl: string, options?: any, ondata?: any, params?: any) => any;
                doPatch: (lurl: any, data: any, options?: any) => any;
            };
            afterLogout: () => void;
            addImageUrlToken: (url: string) => string;
            baseUrl: (params: any) => string;
            urlResEntity: (params: any, checkId: boolean) => string;
            doDelete: (params: any, etag: any) => any;
            doPost: (params: any, data: any) => any;
            doPut: (params: any, data: any, etag: any, returnRepresentation: any) => any;
            doPatch: (params: any, data: any, etag: any, returnRepresentation: any) => any;
            getRessources: (params: any, ondata: any, errors?: any) => any;
        };
    }
}
declare namespace Phoenix {
    module data {
        var execData: (config: any, context: any, callerObject: any) => any;
        class DataSet {
            private _emitters;
            autoselect: boolean;
            config: any;
            defaultDataset: boolean;
            selectedIndex: number;
            constructor(config: any);
            execute(context: any, callerObject: any): any;
            enumTriggers(addLoad: any, cb: any): void;
            enumEmitters(cb: any): void;
            hasCustomEvents(): boolean;
            canExecute(event: any, context: any): boolean;
            data2Output(def: any, context: any): any;
            destroy(): void;
            _findSelectedOData(ldata: any): {
                item: any;
                index: number;
            };
            _findSelected(ldata: any): {
                item: any;
                index: number;
            };
            doAutoSelect(d: any, select: any): any;
        }
        var registerDataProvider: (name: string, provider: any) => void;
        var compileFilterTree: (tree: any, lurl: any, context: any, localContext: any) => any;
        var acceptFilter: (tree: any, item: any) => boolean;
        var extractValue: (value: string) => any;
        var execOutputData: (dataSource: any, result: any) => void;
        var test: {
            output: (def: any, context: any) => any;
            parseTree: (tree: any, lurl: any, context: any, localContext: any) => string;
        };
    }
}
declare namespace Phoenix {
    module ui {
        class Pager {
            private _options;
            private pages;
            private $element;
            private data;
            private _updating;
            private _changed;
            props: any;
            visible: boolean;
            constructor(options: any);
            private _defineProps();
            private _notifyChange(propertyName);
            private _renderPager();
            private _updatePages();
            private _setEvents();
            private _removeEvents();
            updating(value: boolean): void;
            render($parent: any): void;
            destroy(): void;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class PageControl {
            private data;
            private lastError;
            children: any[];
            props: any;
            popup: any;
            dataListeners: any[];
            errors: any[];
            private $error;
            private $loading;
            constructor();
            _defineProps(): void;
            currentPage(): any;
            emittersFor(events: any): any[];
            _historyChanged(): void;
            _notifyChange(propertyName: any): void;
            _notifyChildOnAdd(child: any): void;
            _notifyChildren(propName: any, value: any): void;
            registerDataListener(value: any, parent: any): void;
            removeDataListener(listener: any): void;
            removeParentDataListener(parent: any): void;
            emitDataEvent(event: any, value: any, filter: any): void;
            childByType(ct: any): any;
            addChild(type: any, child: any): void;
            removeChild(child: any): void;
            destroy(): void;
            _setEvents(): void;
            _hideErrors(remove: any): void;
            _showErrors(): void;
            _hideLoading(): void;
            _showLoading(): void;
            loading(show: any): void;
            _removeEvents(): void;
            _closePopup(event: any): void;
            setPopup(popup: any): void;
        }
        function Page(): PageControl;
    }
}
declare namespace Phoenix {
    module ui {
        class Modal {
            private $element;
            private _inProcessing;
            options: any;
            $id: string;
            $locale: any;
            render: any;
            _clickHnd: Function;
            constructor(options: any, locale: any);
            protected _removeEvents(): void;
            protected _execAction(name: any): void;
            protected _addEvents(): void;
            protected _clear(): void;
            processing(value: any): void;
            on(hnd: any): void;
            close(): void;
            open(): void;
            destroy(): void;
        }
    }
}
declare namespace Phoenix {
    module DatasetPlugin {
        class DatasetMethods {
            _lastEvent: any;
            props: any;
            datasets: any;
            loadingHandler: Function;
            noDataHandler: Function;
            errorHandler: Function;
            emitHandler: Function;
            getLocalContextHandler: Function;
            dataChangedHandler: Function;
            updateMenuHandler: Function;
            ds_init(config: any): boolean;
            ds_storeLastEvent(event: any, value: any): void;
            ds_LastEvent(): any;
            ds_destroy(): void;
            ds_context(): any;
            ds_reemit(listeners: any, after: any): any;
            ds_select(datasetName: any, value: any): void;
            ds_loaded(datasetName: any, value: any): void;
            ds_exec(event: any, context: any, dst: any, after: any, datasets: any, notify: any): void;
        }
        var executeDatasets: (datasets: any[], context: any, result: any, handlers: any, after: any, contextByDs?: boolean) => void;
    }
}
declare namespace Phoenix {
    module WidgetUtils {
        var toHtml: (data: any, options: any, parent: any, model: any, llocale: any) => string;
        var cssClass: (cfg: any, options: any, selected?: boolean) => string;
        var heightText: (height: any) => string;
        var loader: () => JQuery;
        var error: () => JQuery;
        var widgetTitle: (html: string[], id: string, data: any, llocale: any, forceShowTitle: boolean) => void;
        var settings: () => JQuery;
        var warning: () => JQuery;
        var noData: (message: string, icon: any) => JQuery;
    }
}
declare namespace Phoenix {
    module ui {
        class Widget implements DatasetPlugin.DatasetMethods {
            private _watchers;
            _lastEvent: any;
            props: any;
            datasets: any;
            loadingHandler: Function;
            noDataHandler: Function;
            errorHandler: Function;
            emitHandler: Function;
            getLocalContextHandler: Function;
            dataChangedHandler: Function;
            updateMenuHandler: Function;
            private $element;
            private $settings;
            private $loader;
            private $noData;
            private $error;
            private $warning;
            private handlers;
            onDSChanged: Function;
            ondatasets: Function;
            layout: any;
            data: any;
            item: any;
            options: any;
            contentRender: any;
            links: any;
            $local: any;
            constructor(ldata: any, options: any, layout: any);
            ds_init(config: any): boolean;
            ds_storeLastEvent(event: any, value: any): void;
            ds_LastEvent(): any;
            ds_destroy(): void;
            ds_context(): any;
            ds_reemit(listeners: any, after: any): any;
            ds_select(datasetName: any, value: any): void;
            ds_loaded(datasetName: any, value: any): void;
            ds_exec(event: any, context: any, dst: any, after: any, datasets: any, notify: any): void;
            _defineProps(): void;
            _notifyChange(propertyName: any): void;
            _listen(): void;
            _unlisten(): void;
            on(event: any, hnd: any): void;
            _exec(event: any): void;
            _setEvents(): void;
            executeLink(href: any, params: any): void;
            _removeEvents(): void;
            dataChanged(datasetNames: any): void;
            execDataSet(datasets: any, context: any, callBack: any, res: any, notify: any): void;
            _loadData(after: any): any;
            _updateTitle(): void;
            _cleanErrors(endLoading: any): void;
            loading(show: any): void;
            _linksState(show: any): void;
            noData(value: any, message: string, icon: string): void;
            getLocalContext(): any;
            settings(): void;
            error(ex: any): void;
            warning(message: any): void;
            _updateHeight($e?: JQuery): boolean;
            _updateCssClass(): void;
            _internalRenderContent($content: any, append: any, async: any): void;
            private watchersHandler(names);
            render($parent: any): void;
            emit(eventName: any, value: any, filter: any): void;
            dataEvent(eventName: any, value: any): void;
            destroy(): void;
            watch(dsName: string, cb: (value: any) => void): void;
            unwatch(dsName: string, cb: any): void;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class MenuBase {
            _lastEvent: any;
            props: any;
            datasets: any;
            loadingHandler: Function;
            noDataHandler: Function;
            errorHandler: Function;
            emitHandler: Function;
            getLocalContextHandler: Function;
            dataChangedHandler: Function;
            updateMenuHandler: Function;
            page: PageControl;
            data: any;
            protected $items: any;
            protected items: any;
            protected options: any;
            protected $element: JQuery;
            protected $content: JQuery;
            ds_init(config: any): boolean;
            ds_storeLastEvent(event: any, value: any): void;
            ds_LastEvent(): any;
            ds_destroy(): void;
            ds_context(): any;
            ds_reemit(listeners: any, after: any): any;
            ds_select(datasetName: any, value: any): void;
            ds_loaded(datasetName: any, value: any): void;
            ds_exec(event: any, context: any, dst: any, after: any, datasets: any, notify: any): void;
            constructor(data: any, options: any);
            _initOptions(options: any): void;
            emit(eventName: any, value: any, filter: any): void;
            init(data: any, options: any): void;
            loading(show: any): void;
            registerDataListener(value: any): void;
            removeDataListener(listener: any): void;
            emitDataEvent(event: any, value: any, filter: any): void;
            onPageChange(propName: any, value: any): void;
            setMenu(data: any): void;
            _onPageChanged(): void;
            _doCloseClick(): void;
            _menuShowed(): void;
            _executeLink(item: any, link: any): void;
            _setEvents(): void;
            renderItems($content: JQuery): JQuery;
            _removeEvents(): void;
            _loadData(after: any): any;
            _expandItem(item: any, url: any, mem: any, itemtitle: any, link: any, index: any): {
                $title: string;
                $item: any;
                $index: any;
                $link: any;
            };
            _expandDatasetItems(dataset: any, itemtitle: any, link: any): any[];
            copyMenuItemData(dst: any, src: any): void;
            _prepareItems(): void;
            _removeContent(): void;
            renderContent(): JQuery;
            show($parent: any): void;
            hide(autoCloseChanged?: boolean): void;
            _hideContent(autoCloseChanged?: boolean): void;
            _showContent(): void;
            render($parent?: JQuery): void;
            _recreateDatasets(): void;
            destroy(): void;
            inPopup(element: any): boolean;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class Menu extends MenuBase {
            constructor(ldata: any, options: any);
            _initOptions(options: any): void;
            _hideContent(autoCloseChanged: any): void;
            _showContent(): void;
            _switchAutoClose(): boolean;
            _doCloseClick(): void;
            copyMenuItemData(dst: any, src: any): void;
            _updateCloseButton($content: any): boolean;
            renderContent(): JQuery;
            _changeSelected(item: any): void;
            _selectDatasetItem(dataset: any, item: any): void;
            _canClick(item: any): any;
            render($parent?: JQuery): void;
            renderItems(): JQuery;
            _executeLink(item: any, link: any): any;
            _onPageChanged(): void;
        }
        var Menuleft: typeof Menu;
        var Menuright: typeof Menu;
    }
}
declare namespace Phoenix {
    module ui {
        class Tabs {
            private _options;
            private _page;
            private _tabs;
            private $element;
            constructor(options: any, tabs: any);
            private _renderTabs();
            private _setEvents();
            private _removeEvents();
            render($parent: any): void;
            destroy(): void;
        }
    }
}
declare namespace Phoenix {
    module LayoutUtils {
        const LAYOUT_BLOCK: string;
        const LAYOUT_ROW: string;
        const LAYOUT_COLUMN: string;
        const LAYOUT_HTML: string;
        const LAYOUT_ACCORDION: string;
        const LAYOUT_ACCORDION_GROUP: string;
        var check: (layout: any, parentLayout: any, map: any, mapFields: any, namedMap: any, namedFieldMap: any) => void;
        var layoutVisible: (layout: any) => any;
        var clearMeta: (layout: any, clearIds: any) => void;
        var clearMaps: (layout: any, map: any, mapFields: any, namedMap: any, namedMapFields: any) => void;
        var afterRemoveChild: (layout: any, map: any, mapFields: any, namedMap: any, namedMapFields: any) => void;
        var canSelect: (layout: any, level: any) => boolean;
        var updateCssClass: (e: any, layout: any, parent: any, options: any) => void;
        var toHtml: (layout: any, model: any, llocale: any, options: any) => string;
    }
}
declare namespace Phoenix {
    module ui {
        class BaseLayout {
            map: any;
            expressionTitle: boolean;
            mapFields: any;
            namedMap: any;
            namedMapFields: any;
            $locale: any;
            $element: JQuery;
            protected $content: JQuery;
            protected resizeList: any[];
            protected currentResizeList: any[];
            protected afterRenderList: any[];
            options: any;
            data: any;
            children: any;
            controls: any;
            page: PageControl;
            private _disableRules;
            constructor(ldata: any, options: any, fdata: any, schema: any, locale: any, preferences: any);
            _afterCreate(): void;
            protected initOptions(options: any): any;
            protected _init(ldata: any, options: any): void;
            pageLayoutInit(): void;
            getSchema(path: string): any;
            getLookupForSchema(path: string, lookupName: string): any;
            _setDesignListeners(): void;
            _removeEvents(): void;
            _addEvents(): void;
            _removeBaseEvents(): void;
            _addBaseEvents(): void;
            _onSelectedChanged(element: any, data: any, notify: any): void;
            _showSelected($element: any, layout: any): void;
            _setAccordionEvents(): void;
            _doDatasetEventAfterEnabled(child: any): void;
            _activateLayout(layout: any, value: any): void;
            _removeAccordionEvents(): void;
            toString(layout: any): any;
            emit(eventName: any, value: any, filter: any): void;
            protected openErrors(): void;
            _renderLayout(layout: any): JQuery;
            protected afterRenderChildren($e: any): void;
            isChildOf(child: any, layout: any): boolean;
            _isChildVisibleOf(child: any, layout: any): boolean;
            _getVisibleChildren(layout: any): any[];
            _getChildrenOf(layout: any): any[];
            _getEventListFor(list: any): any[];
            _refreshDataSets(children: any): void;
            _renderLayoutContent(layout: any): void;
            _isVisible(id: any): boolean;
            _renderChildren($e: any): any[];
            _refreshCurrentResizeList(): void;
            _clearChildren(): void;
            _refreshSelected(): void;
            registerDataListener(value: any): void;
            removeDataListener(listener: any): void;
            emitDataEvent(event: any, value: any, filter: any): void;
            protected afterRender($e: JQuery): void;
            protected _internalRender($parent: any, refresh: any): JQuery;
            protected afterAddedInDom(): void;
            _callInternalRender($parent: any, refresh: any): void;
            render($parent?: JQuery): JQuery;
            _destroyDataSets(): void;
            destroy(): void;
            check(layout: any, parent: any): void;
            _afterStructureChanged(layout: any): void;
            _afterPropsChanged(item: any): void;
            removeChild(id: any): void;
            setDesignMode(value: any): void;
            getLayoutById(id: any): any;
            getFieldById(id: any): any;
            select(id: any): void;
            updateField(id: any, data: any): void;
            _cleanIds(item: any): void;
            _blockToCols(layout: any): void;
            _changeType(layout: any, newtype: any): void;
            updateIsHidden(layout: any, isHidden: any): void;
            updateLayout(id: any, data: any): void;
        }
        class PageLayout extends BaseLayout implements DatasetPlugin.DatasetMethods {
            _lastEvent: any;
            props: any;
            datasets: any;
            loadingHandler: Function;
            noDataHandler: Function;
            errorHandler: Function;
            emitHandler: Function;
            getLocalContextHandler: Function;
            dataChangedHandler: Function;
            updateMenuHandler: Function;
            ds_init(config: any): boolean;
            ds_storeLastEvent(event: any, value: any): void;
            ds_LastEvent(): any;
            ds_destroy(): void;
            ds_context(): any;
            ds_reemit(listeners: any, after: any): any;
            ds_select(datasetName: any, value: any): void;
            ds_loaded(datasetName: any, value: any): void;
            ds_exec(event: any, context: any, dst: any, after: any, datasets: any, notify: any): void;
            pageLayoutInit(): void;
            _doDatasetEventAfterEnabled(child: any): void;
            _refreshDataSets(children: any): void;
            _callInternalRender($parent: any, refresh: any): void;
            _destroyDataSets(): void;
            _removeMenus(): void;
            updateMenu(mn: any, data: any): void;
        }
        class Layout extends PageLayout {
            constructor(ldata: any, options: any, fdata: any, schema: any, locale: any, preferences: any);
        }
        var LayoutClass: typeof Layout;
    }
}
declare namespace Phoenix {
    module Observable {
        const INDEX_FIELD_NAME: string;
        const SELECTED_FIELD_NAME: string;
        const EXPANDED_FIELD_NAME: string;
        var SchemaUtils: {
            RATE_DECIMALS: number;
            RATE_MAXIMUM: number;
            RATE_SYMBOL: string;
            expandSchema$Ref: (schema: any) => void;
            _getDefault: (value: any) => any;
            checkLookup: (lookup: any) => any;
            schema2Authoring: (schema: any, rootSchema: any, locale: any) => any[];
            filtrableFields: (schema: any, rootSchema: any, locale: any) => any[];
            isFwField: (fieldName: string) => boolean;
            copyModel: (schema: any, model: any, rootSchema?: any) => any;
            columns: (schema: any, rootSchema: any, locale: any) => any[];
            allData: (lookup: any) => boolean;
            pkFields: (pk: any) => string[];
            entityId: (pkValue: any) => string;
            extractPkValue: (item: any, map: string[]) => any;
            odataId: (keys: string[], item: any) => string;
            pk2Id: (pk: any, keys: string[]) => any;
            id2Pk: (id: any, keys: string[]) => any;
            equals: (primaryItem: any, item: any, keys: string[]) => boolean;
            extractBase: (path: any) => string;
            parentPath: (path: any) => any;
            findByPk: (primaryItem: any, keys: string[], list: any[]) => any;
            supportPagination: (lookup: any) => boolean;
            executeLookup: (lookup: any, data: any, ondata?: Function) => any;
            remoteSearch: (localSearch: string, lookup: any) => string;
            lastSegment: (bind: string, display: string) => string;
            findFirst: (value: string, searchField: any, ldata: any[]) => {
                item: any;
                index: number;
            };
            _states: string[];
            isMetaProp: (pn: string) => boolean;
            isMeta: (bind: any) => {
                widget: any;
            };
            getLookup: (path: string, lookupName: string, schema: any, rootSchema: any) => any;
            getSchema: (path: string, schema: any, rootSchema: any, expandArray: boolean) => any;
            states: string[];
            statesAndErrors: string[];
            linksStates: string[];
            isLink: (path: any) => boolean;
            _isMoney: (schema: any) => boolean;
            _internalExtractEnums: (schema: any, rootSchema: any, enums: any, names: string[]) => void;
            _extractEnums: (schema: any, enums: any) => void;
            _fillEnums: (schema: any, enums: any) => void;
            _internalFillEnums: (schema: any, rootSchema: any, enums: any, names: any) => void;
            loadEnums(schema: any): any[];
            arrayProps: string[];
            init: (schema: any, rootSchema: any, context: any, value: any) => any;
            isCompositionRef: (prop: any, rootSchema: any) => boolean;
            isRef: (prop: any, rootSchema: any) => any;
            isList: (prop: any, rootSchema: any) => any;
            isCompositionList: (prop: any, rootSchema: any, followRefs: boolean) => any;
            isSimpleList: (prop: any, rootSchema: any) => boolean;
            inModel: (prop: any, rootSchema: any) => boolean;
            formatNumber: (schema: any, value: number) => string;
            _title: (title: any, locale: any) => any;
            canSort: (schema: any) => any;
            canShowField: (schema: any) => boolean;
            canFilter: (schema: any) => any;
            checkNumber: (value: any, schema: any, locale: any, errors: any) => boolean;
            _validateEmail: (email: string, error: any) => boolean;
            _validateJson: (value: string, error: any) => boolean;
            checkString: (value: any, state: any, schema: any, locale: any, errors: any) => boolean;
            validatePassword: (orig: any, value: any, schema: any, state: any, locale: any, errors: any) => boolean;
            validateSchema: (value: any, schema: any, state: any, locale: any, errors: any) => boolean;
            loadEnumsPromise: (schema: any) => any;
            loadSchemaRefs: (schema: any, ldata: any, layout: any, after: any) => any;
            stateProps: (schema: any) => string[];
            isPassword: (schema: any) => boolean;
            isDate: (schema: any) => boolean;
            isDateTime: (schema: any) => boolean;
            isBoolean: (schema: any) => boolean;
            isSelectField: (fieldName: string) => boolean;
            isExpandField: (fieldName: string) => boolean;
            isNumber: (schema: any) => boolean;
            isText: (schema: any) => boolean;
            isMoney: (schema: any) => boolean;
            text2Value: (textValue: any, schema: any, state: any) => any;
            value2Text: (value: any, schema: any, state: any) => any;
            expand$Ref: (cs: any, rootSchema: any) => any;
            removeExpand: (propName: string, expandingProperty: string) => string;
            registerValidator: (name: any, handler: any) => void;
            getValidator: (name: any) => any;
            registerEnumManager: (name: string, manager: any) => void;
            getEnumManager: (name: any) => any;
        };
        var DataUtils: {
            extractDatasets: (config: any) => any[];
            isQuery: (ds: any) => boolean;
            isCreateOrUpdate: (ds: any) => any;
            extractMainDataSource: (config: any) => any;
            datasetsAsPromise: (ds: any[], transform: any) => any;
            datasetAsPromise: (ds: any, ldata?: any) => any;
            loadMainData: (config: any) => any;
            dsConfig: (datasets: any, prop: any, isQuery: boolean) => any;
        };
    }
}
declare namespace Phoenix {
    module Observable {
        class BaseState {
            protected _state: any;
            name: string;
            parent: any;
            constructor(parent: any, prop: any, value: any);
            destroy(): void;
            state(): any;
            protected _init(parent: any, prop: any, value: any, list: any): void;
        }
        class DataStates extends BaseState {
            constructor(parent: any, prop: any, value: any);
        }
        class LinkStates extends BaseState {
            constructor(parent: any, prop: any, value: any);
        }
    }
}
declare namespace Phoenix {
    module Observable {
        class Errors {
            private _errors;
            private nostore;
            name: string;
            parent: any;
            constructor(parent: any, prop: any, value: any, nostore: any);
            destroy(): void;
            errors(): any[];
            clear(notify: boolean): boolean;
            hasErrors(): boolean;
            addErrors(errors: any, add?: boolean): void;
            addError(message: string, add?: boolean): void;
            addSuccess(message: string, add?: boolean): void;
            addWarning(message: string, add?: boolean): void;
            private notify();
            private _init(parent, prop, value, nostore);
        }
        var errorsUtils: {
            errorChanged: (oldErrors: any, newErrors: any) => boolean;
        };
    }
}
declare namespace Phoenix {
    module Observable {
        class QueryableDataSource {
            private _config;
            private _filter;
            private _origFilter;
            private _orderby;
            private _pageSize;
            private _currentPage;
            private _totalCount;
            private _skip;
            private _model;
            constructor(dsConfig: any, model: any);
            initPagination(pageSize: number, currentpage: number, totalCount: number): void;
            initFromData(ldata: any): void;
            filter: any;
            pageSize(): number;
            orderBy(value?: string): string;
            refresh(resetPagination: boolean): Promise<void>;
            currentPage(page?: number): number;
            totalPages(): number;
            totalCount(): number;
            destroy(): void;
            isQuery(): boolean;
            open(): any;
            remove(key: any, etag?: string): any;
            private _open();
            save(): void;
        }
    }
}
declare namespace Phoenix {
    module Observable {
        class DataListCore {
            protected _map: any;
            protected _selected: any;
            protected _expanded: boolean;
            protected _selectedUids: string[];
            protected _selectedPks: string[];
            protected _schema: any;
            protected _rootSchema: any;
            protected _schemaItems: any;
            protected _items: Data[];
            protected _model: any[];
            protected _path: string;
            protected _locale: any;
            protected _parent: Data;
            frozen: boolean;
            protected _arrayParent: DataListCore;
            protected _queryable: boolean;
            isNull: boolean;
            isUndefined: boolean;
            constructor(schema: any, parent: any, path: any, value: any, arrayParent: any, locale: any);
            $selected: any;
            pushSelected(item: Data, persistent: boolean): void;
            removeSelected(item: Data, persistent: boolean): void;
            protected notifyChangedProperty(propName: string): void;
            addAjaxException(ex: any): any;
            notifyPaginationChanged(): void;
            notifyCountChanged(): void;
            notifySortingChanged(): void;
            isQueryable(): boolean;
            addErrors(errors: any): void;
            addError(message: string): void;
            private _createCustomProps();
            protected _destroyItems(): void;
            $orderby(value?: string): string;
            totalPages(): number;
            totalCount(): number;
            length(): number;
            destroy(): void;
            protected _fillItems(): void;
            protected _setModel(value: any, frozen: any): void;
            setModel(value: any): void;
            protected afterSetModel(): void;
            updateParams(item: any, prop: any, value: any, arrayPropName?: string): any;
            indexOf(value: any): number;
            find(prop: any, ...keys: any[]): Data;
            private _expandForEach(cb, expandingProperty, level, index);
            forEach(cb: any, expandingProperty: string): void;
            get(index: any): Data;
            $expand: boolean;
        }
        class DataListBase extends DataListCore {
            protected _fillItems(): void;
            private _updateSelecting(multiSelect, expandingProperty, list);
            clearSelection(expandingProperty?: string): void;
            updateSelecting(multiSelect: boolean, expandingProperty: string): void;
            enumSelectedItems(expandingProperty: string, cb: (item: any) => void): void;
            private _enumChildren(expandingProperty, cb);
            private _enumSelected(expandingProperty, cb);
            selectItem(value: boolean, item: any, multiSelect: boolean, expandingProperty: string, selectChildren: boolean): void;
            findById(id: string): Data;
            indexOf(value: any): number;
            protected _beforeRemoveItem(item: any): void;
        }
        class QueryList extends DataListBase {
            private _query;
            private _main;
            constructor(parentSchema: any, schema: any, parent: any, path: any, value: any, pageSize: any, pageNumber: any, totalCount: any, arrayParent: any, locale: any);
            filter: any;
            totalPages(): number;
            totalCount(): number;
            $refresh(resetPagination: boolean): Promise<void>;
            $orderby(value?: string): string;
            notifyPaginationChanged(): void;
            notifyFilterChanged(): void;
            notifySortingChanged(): void;
            currentPage(page?: number): number;
            private _removeItem(key, etag);
            remove(item: Data): void;
            destroy(): void;
        }
        class CompositionList extends DataListBase {
            protected _destroyItems(): void;
            find(prop: any, ...keys: any[]): Data;
        }
        class SimpleCompositionList extends DataListCore {
            protected _destroyItems(): void;
        }
        class SimpleTypeList extends SimpleCompositionList {
            push(item: any): void;
            splice(start: number, deleteCount: number, item: any): void;
            remove(item: any): void;
        }
        class DataList extends CompositionList {
            private _new;
            constructor(schema: any, parent: any, path: any, value: any, arrayParent: any, locale: any);
            private _initNew();
            private _createNewItem(init, define);
            updateItem(old: Observable.Data, newItem: Observable.Data): boolean;
            addNew(): void;
            private _destroyNew();
            destroy(): void;
            push(item: any): void;
            splice(start: number, deleteCount: number, item: any): void;
            remove(item: any): void;
        }
        class Data {
            private _schema;
            private _selected;
            private _model;
            private _origModel;
            private _locale;
            private _validators;
            private _path;
            private _parent;
            private _rootParent;
            private _arrayParent;
            private _children;
            $states: any;
            $errors: any;
            $links: any;
            $create: boolean;
            frozen: boolean;
            onchange: Function;
            onstatechanged: Function;
            isNull: boolean;
            isUndefined: boolean;
            $id: string;
            onRefresh: any;
            datasets: any;
            transform: string;
            constructor(schema: any, parent: any, path: any, value: any, arrayParent: any, frozen: any, locale: any, datasets: any, transform?: string);
            saveModel(): void;
            setModel(value: any): void;
            update(value: any): void;
            $refresh(options?: any): Promise<void>;
            private _validate(validators);
            validate(): boolean;
            $select: boolean;
            select(value: boolean, multiSelect: boolean, parentArray: any, expandingProperty: string, selectChildren: boolean): void;
            toggleExpand(expandingProperty: string): boolean;
            enumVisibleChildren(expandingProperty: string, level: number, root: boolean, cb: any): void;
            internalSetSelected(value: boolean, notify: boolean): boolean;
            $index(value?: number): number;
            $save(): any;
            getRootModel(): Data;
            addValidator(name: string, value: boolean): void;
            activateValidator(name: string, value: boolean): void;
            hasValidators(): boolean;
            getParentOf(bind: string, params: any): any;
            setValue(path: any, value: any, params: any): void;
            _getModel(original: boolean): any;
            model(original?: boolean): any;
            getRelativeValue(path: any): any;
            getRelativeState(path: any): any;
            getValueInfo(path: any, params: any): {
                value: any;
                parentIsNull: boolean;
            };
            getValue(path: any, params: any): any;
            _getFullPath(path: any, root: any): any;
            getSchema(path: string): any;
            getState(path: any, params: any): any;
            _setModel(value: any, frozen: any): void;
            _setRefChild(propertyName: any, oldvalue: any, value: any): void;
            _setListChild(propertyName: any, oldvalue: any, value: any): void;
            _setSimpleListChild(propertyName: any, oldvalue: any, value: any): void;
            _setQueryListChild(propertyName: any, value: any[], pageSize: number, page: number, totalCount: number): void;
            private _initFromSchema(schema);
            getParentModel(path: any): any;
            addAjaxException(ex: any): any;
            addError(message: string): void;
            addErrors(errors: any): void;
            private _beforeChange(propertyName, oldValue, value);
            notifyStateChanged(stateName: any, params: any): void;
            private _extractPropName(pn, params);
            private _execValidators(validators, propertyName, event, params, ldata?);
            _notifyChanged(propertyName: any, oldValue: any, value: any, op: any, params: any, validate: any): void;
            private _destroyObject(obj, pn);
            destroy(): void;
        }
        var ObservableUtils: {
            setValue: (path: string, value: any, model: Data, params?: any) => void;
            getValue: (path: string, model: Data, params?: any) => any;
            getState: (path: string, model: Data, params?: any) => any;
            _resolveSegment: (segment: string, path: string, value: any, params: any, val?: any, isSet?: boolean) => any;
        };
    }
}
declare namespace Phoenix {
    module Observable {
    }
}
declare namespace Phoenix {
    module ui {
        class FormManager {
            private _forms;
            private _inAction;
            constructor();
            setInAction(value: boolean): void;
            isInAction(): boolean;
            broadcast(eventName: string, params: any): void;
            add(form: any): void;
            remove(form: any): void;
            formByName(form: string): any;
        }
        var formManager: () => FormManager;
    }
}
declare namespace Phoenix {
    module ui {
        class Form extends BaseLayout {
            private $bind;
            $schema: any;
            $rootSchema: any;
            $data: any;
            formData: any;
            $model: Observable.Data;
            module: any;
            onaction: Function;
            inAction: boolean;
            private _localSettings;
            private _settingsName;
            private _settings;
            private _internalDelayedAction;
            private _inProcessing;
            private _listenerChanged;
            private _listeners;
            private _listenersByName;
            formManager: FormManager;
            private _isInDelayedAction();
            private _setInDelayedAction(value);
            protected initOptions(options: any): any;
            constructor(layoutData: any, options: any, ldata: any, schema: any, locale: any, preferences: any);
            setData(ldata: any): void;
            processing(value: any): void;
            private _findControlByField(name);
            loadPrefs(): void;
            supportSettings(): boolean;
            getFieldSettings(field: string): any;
            setFieldSettings(field: string, settings: any): void;
            savePrefs(after: any): void;
            sendMessage(message: string, field: string, params: any): any;
            afterSettings(field: string, widget: string, sdata: any): any;
            beforeSettings(field: string, widget: string): any;
            protected _createError(): HTMLElement;
            private _createErrorItem(error, show);
            protected clearErrors(): void;
            protected showErrorItem(error: any, clear: any): void;
            protected afterRenderChildren($e: any): void;
            protected afterRender($e: JQuery): void;
            stateChanged(propName: any, params: any): void;
            getSchema(path: string): any;
            getLookupForSchema(path: string, lookupName: string): any;
            registerListenerFor(field: string, target: any, id?: string): void;
            unRegisterListenerFor(field: string, target: any): void;
            setValue(path: any, value: any): void;
            getValue(path: any): any;
            getParentModel(path: any): any;
            getState(path: any): any;
            _enumListener(name: string, cb: any): void;
            _rebuildListeners(): void;
            _match(p: any, cb: any): void;
            execAction(propName: string, actionParams?: any, params?: any): void;
            broadcast(eventName: string, params: any): void;
            _modelChanged(propName: any, ov: any, nv: any, op: any, params: any, actionParams: any): void;
            afterchanged(propName: any, op: any, params: any, actionParams: any): void;
            on(cb: any): void;
            _stateChanged(propName: any): void;
            destroy(): void;
            _idComponent(el: any): any;
            _event2Layout: (event: any) => any;
            _event2FieldByElement(el: any): any;
            _event2Field(event: any): any;
            _removeBaseEvents(): void;
            _freeze(e: any): boolean;
            _addBaseEvents(): void;
            protected afterAddedInDom(): void;
        }
        var FormClass: typeof Form;
        function removeForm(form: BaseLayout): void;
        var OpenForm: ($parent: JQuery, layout: any, schema: any, fdata: any, locale: any, handler: any, formOpts?: any, after?: Function) => void;
    }
}
declare namespace Phoenix {
    module ui {
        interface ModalFormOptions {
            name: string;
            meta: string;
            controller: string;
            options: any;
            locale?: any;
        }
        class ModalForm extends Modal {
            constructor(formOptions: any, layout: any, schema: any, data: any, locale: any, preferences: any);
            on(hnd: any): void;
            onNatural(hnd: any): void;
        }
        class FormController {
            storageName: string;
            bindProperty: string;
            data(): any;
            initObjectState(model: any): void;
            onModelChanged(action: any, model: any, form: any, modal?: any): any;
        }
        var OpenModalForm: (formOptions: any, layout: any, schema: any, fdata: any, locale: any, handler: any) => void;
        var showModalForm: (opts: ModalFormOptions, data?: any) => void;
    }
}
declare namespace Phoenix {
    module ui {
        class AbsField {
            protected $element: JQuery;
            state: any;
            name: any;
            config: any;
            form: Form;
            options: any;
            focused: boolean;
            destroyed: boolean;
            focusTimer: number;
            protected fieldOptions: any;
            protected renderOptions: any;
            protected $lookup: any;
            protected $display: string;
            protected useDisplay: boolean;
            $schema: any;
            $schemaItems: any;
            id: string;
            $bind: string;
            parent: any;
            constructor(fp: any, options: any, form: Form);
            getSettingsName(controlName: string): string;
            targetInControl(target: any): boolean;
            protected setParentId(id: string): void;
            protected isMeta(): boolean;
            protected beforeSaveSettings(): boolean;
            savePreferences(after: any): any;
            protected getCustomBind(): string;
            setHidden(element: any): void;
            protected _state(): void;
            private _defineProps();
            render($parent: JQuery): void;
            appendElement($parent: JQuery, options: any): void;
            setEvents(opts: any): void;
            removeEvents(): void;
            customOptions(opts: any): void;
            _initOptions(defOpts: any): any;
            destroy(): void;
            protected showErrors(element: any, errors: any): void;
        }
        var Utils: {
            useDatePicker: () => boolean;
            nativeDate: () => boolean;
            nativeNumber: () => boolean;
            addErrorDiv: (html: any) => void;
            keyPressPassword: (event: JQueryEventObject) => boolean;
            keyPressCode: (event: JQueryEventObject) => boolean;
            keyPressNumber: (event: JQueryEventObject) => boolean;
            getRegisteredControl: (type: string, isEnum: boolean, widget: string, format: string, options: any) => any;
            addContainerId: (html: string[], authoring: boolean) => void;
            containerBaseClass: (groupClass: string, authoring: boolean, options: any) => string;
            align2Css: (align: string) => string;
            fieldWrapper: (html: string[], options: any, authoring: boolean, after: Function, customizer?: any) => void;
            fillSelect(enums: any[], input: any, schema: any): void;
            datePickerSetValue: ($element: JQuery, value: string) => void;
            datePickerInitialize: ($element: JQuery, opts: any, onHide: any) => void;
            datePickerDestroy: ($element: JQuery) => void;
            text2value(textValue: string, schema: any, state: any): any;
            defaultOptions: {
                titleIsHidden: boolean;
                placeHolder: boolean;
                labelCol: number;
            };
            displayValue: (value: any, schema: any, locale: any, options: any, item: any, fieldName?: string) => any;
            addTooltip: (html: any, description: any, options?: any) => void;
        };
        var registerControl: (factory: any, type: string, isEnum: boolean, widget: string, options?: any) => void;
    }
}
declare namespace Phoenix {
    module ui {
        class Alert extends AbsField {
            constructor(fp: any, options: any, form: any);
            _setDisabled(input: any, element: any): void;
            _setReadOnly(input: any, element: any): void;
            _setMandatory(input: any, element: any): void;
            _label(): HTMLElement;
            _state2UI(): void;
            changed(propName: any, ov: any, nv: any, op: any): void;
            stateChanged(propName: any, params: any): void;
            render($parent: any): JQuery;
        }
    }
}
declare namespace Phoenix {
    module events {
        class EventManager {
            private _isDisabled;
            constructor();
            disable(): void;
            enable(): void;
        }
        var mouseEvents: (eventType: string) => string;
        function isLeftButton(eventObject: JQueryMouseEventObject): boolean;
        function stopEvent(eventObject: any): void;
        function point(event: any): {
            x: number;
            y: number;
        };
        var eventManager: EventManager;
    }
}
declare namespace Phoenix {
    module drag {
        class DragAndDropManager {
            private _listeners;
            private _current;
            private _coverId;
            private _md;
            private _mu;
            private _mm;
            constructor();
            initialize(): void;
            finalize(): void;
            startMouseMove(): void;
            stopMouseMove(): void;
            private _canExecuteEvent(event);
            private mouseUp(eventObject);
            private mouseDownEmpty(eventObject);
            private mouseMove(eventObject);
            addDrag(listeners: HTMLElement[]): DragElement;
            rmvDrag(drag: DragElement): void;
            setCurrent(dragObject: DragElement): boolean;
            cancelDrag(): void;
            cover(value: boolean, cursor?: string, zindex?: number): void;
        }
        class DragElement {
            minLeft: number;
            maxLeft: number;
            minTop: number;
            maxTop: number;
            currentLeft: number;
            currentTop: number;
            moveX: boolean;
            moveY: boolean;
            stopEvent: boolean;
            floatElement: HTMLElement;
            floatParent: HTMLElement;
            startOffset: any;
            startPoint: any;
            currentPoint: any;
            data: any;
            private mouseMoveCount;
            private _elements;
            private _mdEvent;
            inDragging: boolean;
            coverDocument: boolean;
            cursor: string;
            onDragEnd: any;
            onDragStart: any;
            onDrag: any;
            canStartDragHandler: any;
            constructor(elements: HTMLElement[]);
            clear(): void;
            private _removeEvents();
            private _setEvents();
            private mousedown(eventObject);
            finalize(): void;
            ready(eventObject: JQueryMouseEventObject): boolean;
            notifyDrag(eventObject: JQueryMouseEventObject): void;
            private notifyDragStart(eventObject);
            private canStartDrag(event);
            private canDrop(value);
            notifyDragEnd(doCancel: any, event: JQueryMouseEventObject): void;
        }
        var dragManager: DragAndDropManager;
        var setData: (data: any) => void;
        var getData: () => any;
    }
}
declare namespace Phoenix {
    module ui {
        var GridUtil: {
            createCols: (id: any, columns: any, options: any, authoring: boolean, locale: any, orderby: string, isFrozen: boolean) => DocumentFragment;
            createColGroup: (columns: any, options: any, isFrozen: boolean) => DocumentFragment;
            updSorting: (options: any, pc: HTMLElement, colMap: any, orderby: string) => void;
            gridContainer: (id: any, options: any, authoring: any, title: any, locale: any, columns: any, frozenColumns: any) => any;
            createRows: (id: any, rows: any, columns: any, options: any, authoring: any, locale: any, isFrozen: boolean, isTotal: boolean, cb: any) => DocumentFragment;
            createBulkRows: (id: any, rows: any, columns: any, options: any, authoring: any, locale: any, isFrozen: boolean, isTotal: boolean, cb: any) => DocumentFragment;
            createRow: (id: string, index: number, level: number, row: any, columns: any[], options: any, authoring: boolean, locale: any, isOdd: Boolean, isFrozen: boolean, isTotal: boolean) => HTMLTableRowElement;
            setRowsSelected: (id: string, value: boolean, options: any, parent: HTMLElement) => void;
            createGridRows: (id: any, rows: any, values: any, columns: any, options: any, authoring: any, locale: any) => DocumentFragment;
            createInplaceEdit: (svalue: string, value: any, state: any, parent: HTMLElement, cell: any, col: any, opts: any) => {
                input: HTMLInputElement;
                parent: HTMLElement;
                td: HTMLElement;
                isInputElement: boolean;
                canSelect: boolean;
                schema: any;
            };
            updateInplaceEdit: (inplace: any, svalue: string, value: any, state: any, parent: HTMLElement, cell: any, col: any, opts: any) => void;
            createDetail: (id: string, childBefore: HTMLElement) => HTMLElement;
            updateEvenOdd: (pr: HTMLElement) => void;
            ensureWidth: (value: any) => string;
            updateFrozenWidth: (e: HTMLElement, id: string, cols: any) => void;
            setColumnWidth: (colId: string, colsParents: HTMLElement[], width: number) => void;
            hasFrozenColumns: (opts: any, frozenColumns: any[]) => boolean;
            cloneForMove: (element: HTMLElement) => HTMLElement;
            isPixel: (value: any) => boolean;
            widthFromSchema: (schema: any) => number;
            resizeDiv: (parent: HTMLElement, point: any) => HTMLElement;
            getColumnsSizeParents: (id: string, parent: HTMLElement, options: any, isFrozen: boolean) => HTMLElement[];
        };
    }
}
declare namespace Phoenix {
    module ui {
        var glbGridFilter: any;
        var glbGridSettings: any;
        class BasicGrid extends AbsField {
            columns: any[];
            frozenColumns: any[];
            opts: any;
            selectedCell: any;
            private _settings;
            private _settingsName;
            private _ignoreNotifications;
            private _totalProperty;
            private _view;
            private _viewMap;
            private _useView;
            private _mapCols;
            private _details;
            private _originalCols;
            private _pager;
            private _toolBar;
            private _scroller;
            private _rsTimer;
            private _rsFrozenTimer;
            private _scrollableMaster;
            private _scrollableHeaderOfMaster;
            private _scrollableFooterOfMaster;
            private _scrollableFrozenContent;
            private _deltaHScrollContent;
            private _drag;
            private inplace;
            constructor(fp: any, options: any, form: Form);
            private _initOrigColumns(opts);
            private checkOptions(opts);
            protected beforeSaveSettings(): boolean;
            private _inplaceEditValue2Model(value, item, col);
            private _inplaceEditAcceptKeys(key);
            private _inplaceEditAddEvents();
            private _inplaceEditRemoveEvents();
            private _inplaceEditGetValue(cell);
            private _inpaceEditShow(td, isFocusIn);
            private _inplaceEditRemove(isFocusOut, isDestroy);
            private _inplaceEditModel2Control(item, field, td);
            removeEvents(): void;
            private _onFrozenFocusScroll(td, col);
            setEvents(opts: any): void;
            private _getColsInfo(columns, parent);
            private _canStartDrag(event);
            private _onDragStart(event);
            private _onDrag(event);
            private _onDragEnd(cancel, event);
            private _cddresize(event);
            private _sddresize(event);
            _dddresize(event: any): boolean;
            private _eddresize(cancel, event);
            private _updateColWidth(col, width);
            private _cddmove(event);
            private _sddmove(event);
            private _eddmove(cancel, event);
            _dddmove(event: any): boolean;
            destroy(): void;
            private _moveToPage(page);
            private _onselectPage(page);
            private _onSelectToolElement(toolElement);
            setColumns(columns: any[]): void;
            protected _state(): void;
            private _destroyDetails();
            private _destroyDetailById(id);
            private _initCols(options);
            private _colByField(field);
            private _totalChanged(propName, ov, nv, op, params);
            changed(propName: string, ov: any, nv: any, op: any, params: any): boolean;
            private _modifyTD(item, field, td);
            private _findTR(id, col);
            private _id2rowId(id);
            private _findtBody(col);
            private _modifyFooterCell(item, field);
            private _findCellAndModify(item, tr, field);
            private _modifyCell(item, field, td?);
            private _rootElement();
            private _gridParentFocus();
            private _setErrors(grid, element);
            private _setTableFocus(value);
            focusIn($event: any): void;
            focusOut($event: any): void;
            _doTab(forward: boolean): boolean;
            keypress(event: JQueryEventObject): boolean;
            keydown($event: any): void;
            private _tr2rowId(tr, col);
            private _td2cell(td);
            private _td2value(td);
            mousedown(event: any): boolean;
            private _addRows(item, childrens);
            private _removeRows(item, childrens);
            click(event: any): void;
            private _setDisabled(button, element);
            private _showSelected(cell, value, editable, mousedown);
            private canSelect(cell);
            private canEdit(cell);
            private clearSelected();
            private _selectRow(id);
            private _selectCell(cell, target, mousedown);
            private _selectFirstCell();
            _cell(cell: any, addIndex: boolean): any;
            private _moveUpSelectedCell(count);
            protected resize(): void;
            protected _updateFrozenColumnsHeight(): void;
            private _resize();
            private syncHeaderAndFrozenScroll(e);
            private syncMasterScroll(e);
            private _removeScroller();
            private _vscroll();
            private _vsmcroll();
            private _hscroll();
            private _moveDownSelectedCell(count);
            private _moveRightSelectedCell();
            private _moveLeftSelectedCell();
            private _state2UI(inRender);
            afterAddedInDom(): void;
            stateChanged(propName: any, params: any): void;
            stopProppagation(event: any): void;
            private _buildView(item, index, level, _view, _viewMap);
            private _findById(id);
            private _findByIdEx(id);
            private _findNext(id);
            private _findPrev(id);
            private _renderTotalRows();
            private _renderRows(allRows, afterRow, values);
            editDetail(item: any): void;
            private closeDetail(id);
            private _removeRow(id);
            private _updOddEven();
            private _createRow(item);
            filtrableColumns(): any[];
            private _getColumnsFromSchema();
            private _getSelectedColumns();
            private _getGroupsFromSchema();
            getColumnsForSettings(): any;
            getColumnsForFilter(): any;
            getColumnsForFilterExpress(fields?: any): any;
            private _updateSorting();
            private _renderColumns(opts);
            private _refreshGrid;
            toggleMultiselect(): void;
            render($parent: any): JQuery;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class Check extends AbsField {
            constructor(fp: any, options: any, form: any);
            _input(): HTMLInputElement;
            _check(): HTMLElement;
            click(event: any): void;
            _setDisabled(input: any, element: any): void;
            _setReadOnly(input: any, element: any): void;
            _setMandatory(input: any, element: any): void;
            _state2UI(): void;
            changed(propName: any, ov: any, nv: any, op: any): void;
            stateChanged(propName: any, params: any): void;
            render($parent: any): JQuery;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class ColumnGrid extends AbsField {
            columns: any[];
            opts: any;
            private _settings;
            private _allColumnsNames;
            private _allColumns;
            private rows;
            constructor(fp: any, options: any, form: any);
            destroy(): void;
            private _initSchemaRows(rows);
            private _colByName(rn);
            setSettings(settings: any): void;
            private _initRows();
            private _initCols(options);
            private _modifyRow(value, schema, rowIndex, colIndex, opts, item, fieldName);
            changed(propName: any, ov: any, nv: any, op: any, params: any): void;
            private _grid();
            private _setErrors(grid, element);
            click(event: any): void;
            private _setDisabled(button, element);
            private _state2UI();
            stateChanged(propName: any, params: any): void;
            private _renderRows();
            private _draw(opts);
            private _rrender();
            render($parent: any): JQuery;
            private _createRow(index);
            private _initAllColumns();
            private _selectedColumns();
            private _initDataSettings();
            sendMessage(message: any, params: any): any;
            stopProppagation(event: any): void;
            private openColumns(params);
        }
    }
}
declare namespace Phoenix {
    module ui {
        class DropItems {
            opened: boolean;
            private static itemHeight;
            private static deltaHeight;
            private $element;
            private $parent;
            private $input;
            private options;
            private keys;
            private currentList;
            private page;
            constructor($parent: JQuery, $input: any, options: any);
            click(event: any): void;
            inMenu(target: any): boolean;
            static _itemHeight(): number;
            _checkOptions(options: any): void;
            _renderContent(): void;
            _renderElements(): void;
            private _afterHide(doFocus);
            hide(target: any): void;
            private _selectByListIndex(map, li);
            private _emptyHtmlList();
            private _show(selectedIndex);
            triggerBlurred(event: any): void;
            show(ldata: any, selectedIndex: number, ignoreNegativeSSelectedIndex: boolean): void;
            private _map();
            private _selectByPk(id, map?);
            private _findSeleted(map?);
            _isInView(e: any, parent: any): boolean;
            move(value: number): any;
            select(): void;
            private _doSelect(selected, close);
            inPopup(target: any): boolean;
            destroy(): void;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class BaseEdit extends AbsField {
            protected _doSelect: boolean;
            protected _hasSymbol: boolean;
            constructor(fp: any, options: any, form: any);
            protected _input(): HTMLElement;
            protected _colParent(): HTMLElement;
            protected _value2Text(): any;
            protected _isPassword(): boolean;
            protected _isDate(): boolean;
            protected _isMemo(): boolean;
            protected _isNumber(): boolean;
            protected _isMoney(): boolean;
            protected _setDisabled(input: any, element: any): void;
            protected _setReadOnly(input: any, element: any): void;
            protected _setErrors(input: any, element: any): void;
            protected _setMandatory(input: any, element: any): void;
            protected _state2UI(): void;
            protected _setSymbol(e: any): void;
            protected _value2Input(input: any): void;
            changed(propName: any, ov: any, nv: any, op: any): void;
            stateChanged(propName: any, params: any): void;
            destroy(): void;
        }
        class Edit extends BaseEdit {
            constructor(fp: any, options: any, form: any);
            beforeAppend(): void;
            mousedown(event: any): boolean;
            stopProppagation(event: any): void;
            click(event: any): void;
            internalRender($parent: any): void;
            render($parent: any): void;
            _text2value(textValue: any): any;
            protected _value2Text(): any;
            customOptions(options: any): void;
            private customOptionsMemo(options);
            private customOptionsPassword(options);
            private customOptionsDate(options);
            private customOptionsNumber(options, symbol);
            private _removeEventsDate();
            private _setEventsDate();
            setEvents(opts: any): void;
            removeEvents(): void;
            checkValue(value: any, after: any): void;
            keypress(event: JQueryEventObject): boolean;
            equals(nv: any): boolean;
            focusOut(event: JQueryEventObject): void;
            destroy(): void;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class EnumList extends AbsField {
            constructor(fp: any, options: any, form: any);
            protected _setDisabled(input: any, element: any): void;
            protected _setReadOnly(input: any, element: any): void;
            protected _setErrors(input: any, element: any): void;
            protected _setMandatory(input: any, element: any): void;
            protected _input(): HTMLElement;
            protected _state2UI(isCreate: boolean): void;
            mousedown(event: any): boolean;
            private _getEnumsNames();
            private _getEnums();
            private _toggleEnumByIndex(index);
            keypress(event: JQueryEventObject): void;
            click(event: JQueryEventObject): void;
            changed(propName: any, ov: any, nv: any, op: any, params: any): void;
            private _setFilter();
            stateChanged(propName: any, params: any): void;
            render($parent: any): JQuery;
            private _setItemValue(item, value);
            destroy(): void;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class Group extends AbsField {
            constructor(fp: any, options: any, form: any);
            _item(ii: Number): HTMLElement;
            click(event: any): void;
            _setDisabled(element: any): void;
            _enumItems(cb: Function): void;
            _setMandatory(element: any): void;
            _state2UI(cb: Function): void;
            _getDefaultItem(): HTMLElement;
            stateChanged(propName: any, params: any): void;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class BtnGroup extends Group {
            constructor(fp: any, options: any, form: any);
            _state2UI(): void;
            changed(propName: any, ov: any, nv: any, op: any): void;
            keydown($event: any): void;
            render($parent: any): JQuery;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class Label extends AbsField {
            private _parentId;
            constructor(fp: any, options: any, form: any);
            protected isMeta(): boolean;
            protected setParentId(id: string): void;
            getCustomBind(): any;
            _setDisabled(input: any, element: any): void;
            _setReadOnly(input: any, element: any): void;
            _setMandatory(input: any, element: any): void;
            _label(): HTMLElement;
            _state2UI(): void;
            stateChanged(propName: any, params: any): void;
            private _title();
            render($parent: any): JQuery;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class Link extends AbsField {
            constructor(fp: any, options: any, form: any);
            _button(): Node;
            click(event: any): void;
            _setDisabled(button: any, element: any): void;
            _state2UI(): void;
            stateChanged(propName: any, params: any): void;
            render($parent: any): JQuery;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class Lookup extends Edit {
            private lookupOptions;
            private menu;
            private hasCachedData;
            private cachedData;
            private modified;
            private eventBus;
            private onselectItemHandler;
            private isEnum;
            constructor(fp: any, options: any, form: any);
            customOptions(options: any): void;
            protected _value2Text(): any;
            private _getSource(options);
            private _filterResult(ldata, opts);
            private _findselected(ldata, opts);
            private _findValue(search, after);
            private _onselectItem(value);
            private _checkPopupMenu();
            mousedown(event: any): boolean;
            stopProppagation(event: any): void;
            click(event: any): void;
            beforeAppend(): void;
            _managePreventDefault(keyName: any, $event: any): any;
            _shouldTrigger(keyName: any, $event: any): any;
            setEvents(opts: any): void;
            removeEvents(): void;
            inputChanged(): void;
            checkValue(nv: any, after: any): void;
            keydown($event: any): void;
            focusOut(event: any): void;
            focusIn(event: any): void;
            trigger(event: string, $event?: any): void;
            destroy(): void;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class BasePicture extends AbsField {
            protected editable: boolean;
            constructor(fp: any, options: any, form: any);
            protected _setDisabled(element: any): void;
            private _setReadOnly(element);
            private _setMandatory(element);
            private _state2UI();
            protected _showValue(value: any): void;
            changed(propName: any, ov: any, nv: any, op: any): void;
            stateChanged(propName: any, params: any): void;
            protected _img(): HTMLImageElement;
            protected _altimg(): HTMLElement;
            render($parent: any): JQuery;
        }
        class Picture extends BasePicture {
            constructor(fp: any, options: any, form: any);
            private _createImage(event);
            private _removeImage();
            click(event: any): void;
            private _upload();
            setEvents(opts: any): void;
            removeEvents(): void;
            protected _setDisabled(element: any): void;
            private _showRemoveImage(value);
            private _rmv();
            protected _showValue(value: any): void;
        }
        class ImageUrl extends BasePicture {
            constructor(fp: any, options: any, form: any);
            protected _showValue(value: any): void;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class RadioGroup extends Group {
            constructor(fp: any, options: any, form: any);
            _state2UI(): void;
            changed(propName: any, ov: any, nv: any, op: any): void;
            render($parent: any): JQuery;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class ReadOnlyField extends AbsField {
            private _map;
            private $expression;
            constructor(fp: any, options: any, form: any);
            protected _state(): void;
            private _refreshValues();
            _value2UI(): void;
            private _findMap(pn);
            changed(propName: string, ov: any, nv: any, op: any): void;
            stateChanged(propName: any, params: any): void;
            _state2UI(): void;
            render($parent: any): JQuery;
            destroy(): void;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class Select extends BaseEdit {
            constructor(fp: any, options: any, form: any);
            private fillSelect(enums);
            protected _state2UI(): void;
            private _setFilter(inRender);
            stateChanged(propName: any, params: any): void;
            render($parent: any): JQuery;
            removeEvents(): void;
            protected _value2Input(input: any): void;
            setEvents(opts: any): void;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class Toggle extends AbsField {
            constructor(fp: any, options: any, form: any);
            private _check();
            click(event: any): void;
            private _setDisabled(input, element);
            private _setReadOnly(input, element);
            private _setMandatory(input, element);
            private _state2UI();
            changed(propName: any, ov: any, nv: any, op: any): void;
            stateChanged(propName: any, params: any): void;
            render($parent: any): JQuery;
        }
    }
}
declare namespace Phoenix {
    module ui {
    }
}
declare namespace Phoenix {
    module ui {
    }
}
declare namespace Phoenix {
    module ui {
    }
}
declare namespace Phoenix {
    module ui {
        var confirmDlg: (title: string, message: string, onsuccess: Function, oncancel?: Function) => void;
    }
}
declare namespace Phoenix {
    module data {
        class OdataEnumManager {
            private _enums;
            private _entity;
            private _module;
            private _typeField;
            private _codeField;
            private _titleField;
            private _orderByField;
            private _fields;
            constructor(moduleName: string, entity: string, enumTypeField: string, enumCodeField: string, enumTitleField: string, enumOrderByField: string, fields?: string[]);
            promise(enums: any, enumType: any): any;
        }
    }
}
declare namespace Phoenix {
    module ui {
    }
}
declare namespace Phoenix {
    module Data {
    }
}
declare namespace Phoenix {
    module ui {
        class FilterExpress {
            /*********************************
            ********** VARIABLES
            ********************************/
            private _id;
            private _fieldList;
            private _cb;
            private _selectedField;
            private _oldFilter;
            private _options;
            private _nodeParent;
            private _nodeMain;
            private _nodeValidate;
            static FIELD_SELECT_TEXT_DEFAULT: string;
            static VALIDATE_TEXT_DEFAULT: string;
            static VALIDATE_ICON_DEFAULT: string;
            static FORMAT_STRING: string;
            static FORMAT_INTEGER: string;
            static FORMAT_ENUM: string;
            static OP_STRING: string;
            static OP_INTEGER: string;
            static OP_ENUM: string;
            /*******************************
            ************ METHODS
            *******************************/
            constructor(fieldList: any[], cb: Function, options?: any);
            selectedField: any[];
            destroy(): void;
            render($parent: any): void;
            _internalRender(): JQuery;
            _internalRenderOne(): JQuery;
            _internalRenderMultiple(): JQuery;
            _getFieldByCode(code: string): any;
            _getEditField(field: any): JQuery;
            _getOpField(field: any): string;
            _checkFilter(filter: any): boolean;
            _completeFieldList(fields: any): any;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class DsLookup {
            private _ds;
            private _count;
            private _pageSize;
            private _page;
            private _items;
            private _options;
            private _notify;
            private _init;
            private searchText;
            constructor(ds: any, options: any);
            private _initData();
            items: any;
            private _notifyChange(propName);
            getNbPages(): number;
            private _getSkip(page);
            private _getPage(page, context?);
            currentPage(): any;
            toPage(page: any): void;
            nextPage(): void;
            prevPage(): void;
            firthPage(): void;
            lastPage(): void;
            search(searchText: any): void;
            remove(): void;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class ListeOperateurs {
            liste: any;
            constructor();
            add(code: string, lib: string, isBinary: boolean, options?: any): void;
            gets(): any;
            get(code: string): any;
            remove(code: string): void;
        }
        class ListeChamps {
            liste: any;
            constructor();
            add(code: string, lib: string, type: string, options?: any): void;
            get(code: string): any;
            gets(): any;
            remove(code: string): void;
        }
        class Filter {
            id: any;
            code: any;
            op: any;
            values: any;
            constructor(id: any, code: any, op: any, values: any);
            getValues(): any;
            getValueNames(): any;
        }
        class ListeFilters {
            liste: any;
            filters: any;
            compteur: any;
            constructor(filters: any);
            add(champCode: string, opCode: string, values: any): Filter;
            add2(champCode: string, opCode: string, values: any): Filter;
            set(id: any, data: any): any;
            get(id: any): any;
            getByIndex(index: any): any;
            gets(): any;
            getsByChamp(codeChamp: any): any[];
            remove(id: any): void;
            removeAll(): void;
            removeAllByChamp(champCode: string): void;
        }
        class ListeTypes {
            liste: any;
            constructor();
            addType(code: string, lib: string, operateurs: any): void;
            addOperateur(codeType: string, codeOp: string): void;
            getOperateurs(codeType: string): any;
        }
        class CheckBoxList {
            private _elements;
            private _values;
            private options;
            private $element;
            private _items;
            constructor(options?: any);
            elements: any;
            values: any;
            private _notifyChange(propName);
            findVal(val: any): number;
            render($parent: any): any;
            destroy(): void;
            private removeVal(val);
            private addVal(val);
            private setEvents(opts);
            private _removeEvents();
            private renderElements(elements, values, options);
            private _inputs();
            private _setItemValue(item, value);
            private _toggleEnumByIndex(index);
        }
        class ComposantFilter extends AbsField {
            state: any;
            options: Object;
            listeChampsArbre: any;
            listeChamps: ListeChamps;
            listeFilters: ListeFilters;
            listeTypes: ListeTypes;
            listeOperateurs: ListeOperateurs;
            constructor(fp: any, options: any, form: any);
            initData(): void;
            _state(): void;
            click(event: any): void;
            _setDisabled(input: any, element: any): void;
            _setReadOnly(input: any, element: any): void;
            _setMandatory(input: any, element: any): void;
            _state2UI(): void;
            changed(propName: any, ov: any, nv: any, op: any): void;
            stateChanged(propName: any, params: any): void;
            renderInternal: (context: Object, options: Object) => void;
            createContainer: (id: string) => any;
            render($parent: any): JQuery;
            destroy(): void;
        }
    }
}
declare namespace Phoenix {
    module ui {
        var filterData: {
            filter: {
                champs: any[];
                filters: any[];
                entree: any[];
            };
        };
        var filter: {
            format: {
                toPhenix: (champs: any, filters: any) => any;
            };
            addField: (fieldList: any, code: any, libelle: any, type: any, decimals?: any, enums?: any, enumName?: any) => void;
            addField2: (fieldList: any, code: any, libelle: any, type: any, options?: any) => void;
        };
        class FilterManager {
            filterComplex: any;
            filterExpress: any;
            constructor();
            constructeFilter(): any;
        }
    }
}
declare namespace Phoenix {
    module ui {
        var multiSelectUtils: {
            transformPropsToMultiselectFormat: (columns: any, groups: any, columnsLimited?: any) => any;
            transformMultiSelectColumnsToGridColumnsFormat: (columns: any) => any[];
            transformSelectedColumnsToMultiSelectFormat: (columns: any, selectedColumns: any, groups?: any, columnsLimited?: any) => any[];
        };
    }
}
declare namespace Phoenix {
    module ui {
        class MultiSelectList {
            private _data;
            private _options;
            private _callback;
            private _selectedItems;
            private _container;
            private _nodes;
            private _name;
            private _title;
            constructor(data: any, options: any, callback?: any);
            selectedItems: any;
            private _init();
            private _getGroupNode(groups, name);
            private _getItemNode(items, name);
            private _getItem(items, name);
            private _getSelectedItemIndex(name);
            private _itemsIsSelected(items);
            private _itemsIsUnselected(items);
            private _contructeNodes(items, options);
            private _addTags(nodes);
            private _template();
            private _createIcon(elt, icon?, autre?);
            private _addIcon(elt, icon, autre?);
            private _setEvents();
            private _display(name, show);
            private _select(name, callback?);
            private _unSelect(name, callback?);
            private _checkF(name, isCheck?, callback?);
            private _check(name, isCheck?, callback?);
            private _checkG(name, isCheck?, callback?, children?);
            private _showItem(name);
            addItem(name: any): void;
            removeItem(name: any): void;
            private _renderItems(nodes);
            render(parent?: HTMLElement): HTMLElement;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class PillBox {
            private _data;
            private _options;
            private _callback;
            private _selectedItems;
            private _container;
            private _nodes;
            private _input;
            private _name;
            private _title;
            private _menu;
            private _drag;
            constructor(data: any, options: any, callback: any);
            selectedItems: any;
            private _init();
            private _constructeNodes(items, options);
            private _getItem(items, name);
            private _getItemIndex(items, name);
            private _addTag(name, callback?);
            private _removeTag(name, callback?);
            private _filterList(chaine);
            private _setEvents(parent);
            private _template();
            addItem(name: any): void;
            removeItem(name: any): void;
            private _canStartDrag(event);
            private _onDragStart(event);
            private _onDrag(event);
            private _onDragEnd(cancel, event);
            private _onMenuSelectItemHandler(v);
            private _includeDropDownMenu();
            private _renderItems();
            render(parent?: HTMLElement): HTMLElement;
            remove(): void;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class ComposantMultiSelect extends AbsField {
            state: any;
            opts: any;
            private multiSelectList;
            private pillBox;
            private _name;
            private _title;
            private _options;
            constructor(fp: any, options: any, form: any);
            private _extractItems(liste, groupIsItem);
            _state(): void;
            _state2UI(): void;
            changed(propName: any, ov: any, nv: any, op: any, params: any): void;
            stateChanged(propName: any): void;
            _template(id: any): any;
            render($parent: any): JQuery;
        }
    }
}
declare namespace Phoenix {
    module ui {
        class ToolElement {
            config: any;
            data: any;
            props: any;
            protected $element: any;
            protected options: any;
            constructor(config: any, options?: any);
            private _defineProps();
            private _notifyChange(propertyName);
            protected createElement(index: any, config: any, data: any): string;
            protected _setEvents(): void;
            protected update(): void;
            getValue(): void;
            after(): void;
            render($parent: any): any;
            destroy(): void;
        }
        class ToolElementButton extends ToolElement {
            constructor(config: any, options?: any);
            protected createElement(index: any, config: any, data: any): string;
        }
        class ToolElementCount extends ToolElement {
            constructor(config: any, options?: any);
            protected createElement(index: any, config: any, data: any): string;
            protected update(): void;
        }
        class ToolElementDropdownAction extends ToolElement {
            constructor(config: any, options?: any);
            protected createElement(index: any, config: any, data: any): string;
            protected _setEvents(): void;
            after(): void;
        }
        class ToolElementSelect extends ToolElement {
            constructor(config: any, options?: any);
            protected createElement(index: any, config: any, data: any): string;
            protected update(): void;
            protected _setEvents(): void;
        }
        class ToolElementSearch extends ToolElement {
            oldValue: any;
            constructor(config: any, options?: any);
            protected createElement(index: any, config: any, data: any): string;
            protected update(): void;
            getValue(): any;
            private _getInputValue();
            _setEvents(): void;
        }
        class ToolElementFilterExpress extends ToolElement {
            filterExpress: FilterExpress;
            constructor(config: any, options?: any);
            protected createElement(index: any, config: any, data: any): string;
            render($parent: any): any;
            private _format(fields, code, value);
        }
        class ToolElementFilter extends ToolElement {
            constructor(config: any, options?: any);
            protected createElement(index: any, config: any, data: any): string;
            private addTooltip(data);
            protected update(): void;
            render($parent: any): void;
        }
        class ToolBar {
            private toolElements;
            props: any;
            private options;
            private $element;
            constructor(toolElements: any, options?: any);
            getToolElement(indexOrName: any): any;
            setValue(name: any, value: any): void;
            getValue(name: any, value: any): any;
            private _setEvents();
            private _removeEvents();
            private _renderToolElements(toolElements);
            render($parent: any): any;
            destroy(): void;
        }
        class ToolbarForm extends AbsField {
            constructor(fp: any, options: any, form: any);
            destroy(): void;
            click(event: any): void;
            private _createContainer(id);
            private _onSelectToolElement(toolElement);
            render($parent: any): JQuery;
        }
    }
}
