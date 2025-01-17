"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var vue_1 = require("vue");
var utils_1 = require("./utils");
exports["default"] = vue_1.defineComponent({
    name: 'DraggableContainer',
    props: {
        disabled: {
            type: Boolean,
            "default": false
        },
        adsorbParent: {
            type: Boolean,
            "default": true
        },
        adsorbCols: {
            type: Array,
            "default": null
        },
        adsorbRows: {
            type: Array,
            "default": null
        },
        referenceLineVisible: {
            type: Boolean,
            "default": true
        },
        referenceLineColor: {
            type: String,
            "default": '#f00'
        }
    },
    setup: function (props) {
        var positionStore = vue_1.reactive({});
        var updatePosition = function (id, position) {
            positionStore[id] = position;
        };
        var getPositionStore = function (excludeId) {
            var _positionStore = Object.assign({}, positionStore);
            if (excludeId) {
                delete _positionStore[excludeId];
            }
            return _positionStore;
        };
        var state = vue_1.reactive({
            matchedLine: null
        });
        var matchedRows = vue_1.computed(function () { return (state.matchedLine && state.matchedLine.row) || []; });
        var matchedCols = vue_1.computed(function () { return (state.matchedLine && state.matchedLine.col) || []; });
        var setMatchedLine = function (matchedLine) {
            state.matchedLine = matchedLine;
        };
        vue_1.provide('identity', utils_1.IDENTITY);
        vue_1.provide('updatePosition', updatePosition);
        vue_1.provide('getPositionStore', getPositionStore);
        vue_1.provide('setMatchedLine', setMatchedLine);
        vue_1.provide('disabled', vue_1.toRef(props, 'disabled'));
        vue_1.provide('adsorbParent', vue_1.toRef(props, 'adsorbParent'));
        vue_1.provide('adsorbCols', props.adsorbCols || []);
        vue_1.provide('adsorbRows', props.adsorbRows || []);
        return {
            matchedRows: matchedRows,
            matchedCols: matchedCols
        };
    },
    methods: {
        renderReferenceLine: function () {
            var _this = this;
            if (!this.referenceLineVisible) {
                return [];
            }
            return __spreadArray(__spreadArray([], this.matchedCols.map(function (item) {
                return vue_1.h('div', {
                    style: {
                        width: '0',
                        height: '100%',
                        top: '0',
                        left: item + 'px',
                        borderLeft: "1px dashed " + _this.referenceLineColor,
                        position: 'absolute'
                    }
                });
            })), this.matchedRows.map(function (item) {
                return vue_1.h('div', {
                    style: {
                        width: '100%',
                        height: '0',
                        left: '0',
                        top: item + 'px',
                        borderTop: "1px dashed " + _this.referenceLineColor,
                        position: 'absolute'
                    }
                });
            }));
        }
    },
    render: function () {
        return vue_1.h('div', {
            style: { width: '100%', height: '100%', position: 'relative' }
        }, __spreadArray([
            this.$slots["default"] && this.$slots["default"]()
        ], this.renderReferenceLine()));
    }
});
