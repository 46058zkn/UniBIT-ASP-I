function createAutoComplete(n, t, i, r, u, f) {
    var s = $("#" + t),
        h = $("#" + r),
        c = $("#" + i),
        o, e;
    u && (o = function() {
        return $("#" + u).val()
    });
    e = {
        dataType: "json",
        parse: function(n) {
            for (var i = [], t = 0; t < n.length; t++) i[t] = {
                data: n[t],
                value: n[t].Tag,
                result: n[t].Tag
            };
            return i
        },
        formatItem: function(n) {
            return n.Tag
        },
        extraParams: o ? {
            code: o
        } : {},
        width: 400,
        highlight: !1,
        multiple: !1,
        max: 20,
        minChars: 3,
        delay: 1e3
    };
    f && (e = $.extend(e, f));
    s.autocomplete(n, e).result(function(n, t) {
        h.val(t.Tag);
        c.val(t.Code)
    })
}

function bindField(n, t) {
    var r = $("#" + n),
        i = $("#" + t);
    r.change(function() {
        var n = $(this),
            t = n.val();
        t != "" && t != undefined ? i.val(n.find("option:selected").text()) : i.val("");
        n.attr("disabled") ? i.attr("disabled") || i.attr("disabled", "disabled") : i.removeAttr("disabled")
    })
}

function createCascadingDropDown(n, t, i, r, u) {
    var f = $("#" + n),
        o = $("#" + t),
        e = $("#" + i);
    f.CascadingDropDown(e, r, u);
    bindField(n, t)
}

function createDropDownListWithAutocomplete(n, t, i, r, u) {
    $(function() {
        var i = $("#" + n),
            f = $("#" + t);
        i.select2({
            initSelection: function(n, t) {
                t({
                    id: n.val(),
                    text: r
                })
            },
            data: JSON.parse(u),
            createSearchChoice: function(n, t) {
                if ($(t).filter(function() {
                        return this.text.localeCompare(n) === 0
                    }).length === 0) return {
                    id: n,
                    text: n
                }
            },
            allowClear: !0
        }).on("change", function() {
            $(this).select2("data").id === $(this).select2("data").text && i.val("");
            $(this).select2("data").id === "_clear" && (f.val(""), i.val(""), $(this).select2("val", ""));
            $(this).select2("data") != null && f.val($(this).select2("data").text)
        })
    })
}

function switchInputs() {
    var u, t;
    if (arguments.length < 4 || arguments.length % 2 != 0) throw "Incorrect usage.";
    var f = arguments[0],
        e = arguments[1],
        r, n = "disable_group_" + f;
    for (i = 2; i < arguments.length; i += 2) u = arguments[i], t = arguments[i + 1], u == e ? r = t : ($(t).hide().find(":input[disabled!=true]").attr("disabled", "disabled").addClass(n), $(t).attr("disabled", "disabled").addClass(n));
    $(r).show().find(":input." + n).removeAttr("disabled").removeClass(n);
    $(r).removeAttr("disabled").removeClass(n)
}

function randomString() {
    return ((1 + Math.random()) * 268435456 | 0).toString(16).substring(1)
}

function newId() {
    return randomString() + randomString()
}

function switchBlocks(n) {
    setTimeout(function() {
        var t = "disable_group_" + newId(),
            r = function(n) {
                for (i = 0; i < n.arguments.length; i++) {
                    var u = n.arguments[i][0],
                        r = n.arguments[i][1];
                    u == n.defaultValue ? ($(r).show().find(":input." + t + ":not(.disabled)").removeAttr("disabled").removeClass(t), $(r).removeAttr("disabled").removeClass(t)) : ($(r).hide().find(":input[disabled!=true]").attr("disabled", "disabled").addClass(t), $(r).attr("disabled", "disabled").addClass(t))
                }
            };
        r(n);
        $(n.selector).change(function() {
            for (var u = !1, i = n, t = 0; t < n.arguments.length; t++)
                if (this.type === "checkbox") {
                    if (this.checked && n.arguments[t][0] === "True") {
                        i.defaultValue = "True";
                        u = !0;
                        break
                    }
                } else if (this.value == n.arguments[t][0]) {
                i.defaultValue = n.arguments[t][0];
                u = !0;
                break
            }
            u || (i.defaultValue = n.switchDefault);
            r(i)
        })
    }, 0)
}(function(n) {
    function t(t, i) {
        var s = n("form", t),
            e, o;
        if (s.size() == 1) e = s[0];
        else if (s.size() > 1) throw new Error("There must be at most one form in the dialog");
        o = {
            type: i.type,
            url: i.actionUrl,
            dataType: "json",
            error: i.error
        };
        e ? n.extend(o, {
            data: n(e).serializeArray(),
            success: function(o) {
                if (f(e), o.result == "success") i.succeeding(t) != !1 && (i.success(), n(t).dialog("destroy"));
                else if (o.result == "error") r(e, o.fieldErrors), u(e, o.summaryErrors);
                else if (o.result == "redirect") n(t).dialog("destroy"), n.redirect(o.url);
                else if (o.result == "loadNew") {
                    var s = n.extend({}, i, o.options);
                    i.serialForm && n.extend(s, {
                        succeeding: function(t) {
                            return n.formDialog(n.extend({}, i, {
                                dialogCreating: function() {
                                    n(t).dialog("destroy")
                                }
                            })), !1
                        }
                    });
                    n.extend(s, {
                        dialogCreating: function() {
                            n(t).dialog("destroy")
                        }
                    });
                    n.formDialog(s)
                } else throw new Error("Unknown form dialog result");
            }
        }) : n.extend(o, {
            data: {},
            success: function(r) {
                i.success();
                r.result == "redirect" && n.redirect(r.url);
                n(t).dialog("destroy")
            }
        });
        n.ajax(o)
    }

    function i(t) {
        n(t).dialog("close")
    }

    function r(t, i) {
        var r = n([]).add(t.elements).filter(":input").not(":submit, :reset, :image, [disabled]").each(function() {
            var t = this,
                r = i[n(t).attr("name")];
            r && (label = n("<label/>").attr({
                generatedError: !0
            }).addClass("error").html(r), label.insertAfter(t))
        })
    }

    function u(t, i) {
        ul = n("<ul/>").attr({
            generatedError: !0
        }).addClass("error");
        for (var r = 0; r < i.length; r++) ul.append("<li>" + i[r] + "<\/li>");
        ul.appendTo(t)
    }

    function f(t) {
        n("[generatedError]", t).replaceWith("")
    }
    n.formDialog = function(t) {
        var i = n.extend({}, n.formDialog.settings, t),
            r = n("<div/>")[0],
            u;
        i.content && n(r).html(i.content);
        u = function() {
            var t = {};
            i.hideOkButton || (t[i.okButtonText] = function() {
                i.okButtonFunction(r, i)
            });
            t[i.cancelButtonText] = function() {
                i.cancelButtonFunction(r, i)
            };
            n(r).dialog({
                modal: i.modal,
                width: i.width,
                title: i.title,
                close: i.close,
                buttons: t
            });
            n(r).keypress(function(t) {
                return !(t.which && t.which == 13 || t.keyCode && t.keyCode == 13) || n(t.srcElement).is("textarea") || n(t.target).is("textarea") ? !0 : (i.hideOkButton ? i.cancelButtonFunction(r, i) : i.okButtonFunction(r, i), !1)
            })
        };
        i.contentUrl ? n(r).load(i.contentUrl, "", function() {
            i.dialogCreating(r);
            u();
            i.dialogCreated(r)
        }) : u()
    };
    n.formDialogSetup = function(t) {
        n.extend(n.formDialog.settings, t)
    };
    n.formDialog.settings = {
        cancelButtonFunction: i,
        cancelButtonText: "Отказ",
        close: function() {
            n(this).dialog("destroy")
        },
        dialogCreating: function() {},
        dialogCreated: function() {},
        error: function() {},
        hideOkButton: !1,
        modal: !0,
        okButtonFunction: t,
        serialForm: !1,
        succeeding: function() {},
        success: function() {},
        okButtonText: "Запис",
        type: "POST",
        width: 450
    }
})(jQuery),
function(n) {
    n.fn.reload = function() {
        return this.each(function() {
            var t = this;
            n.ajax({
                url: n(document).attr("location").href,
                type: "GET",
                dataType: "html",
                complete: function(i, r) {
                    var e;
                    if (r == "success" || r == "notmodified") {
                        var o = "#" + t.id,
                            u = i.responseText,
                            f = /<body>/i.exec(u);
                        f && (u = u.substring(f.index + f[0].length), f = /<\/body>/i.exec(u), u = u.substring(0, f.index));
                        e = n(u).find(o)[0].innerHTML;
                        n(t).html(e)
                    }
                }
            })
        })
    }
}(jQuery),
function(n) {
    function t(t, i) {
        return t ? n(i).data("clicked") ? !1 : (n(i).data("clicked", !0), n(i).is("input") ? n(i).attr("value", "Изчакайте...") : n(i).find("img").attr("src", "/Content/images/ajax-loader.gif"), !0) : !0
    }

    function i(t, i, r) {
        var u = n("<form style='display:none;' action='" + t + "' method='" + i + "' />"),
            s = !1,
            h, e, o, c, f;
        if (r && (n("#" + r + " *").filter("input, select, textarea").not("[type=submit], [type=button], [type=image]").each(function() {
                var t = n(this).clone();
                n(this).is("select") || n(this).is("input[type=text]") || n(this).is("textarea") ? t.val(n(this).val()) : n(this).is("input[type=checkbox], input[type=radio]") && t.attr("checked", n(this).attr("checked"));
                t.appendTo(u)
            }), f = n("#" + r + " input[type=file]"), f.size() > 0 && (u.attr("enctype", "multipart/form-data"), s = !0, u.attr("encoding", "multipart/form-data"), f.each(function() {
                var t = u.children("[name=" + n(this).attr("name") + "]");
                n(this).replaceWith(t).appendTo(u)
            }))), t.indexOf("?") >= 0) {
            h = t.substring(t.indexOf("?") + 1, t.length);
            e = n.parseQueryString(h);
            for (o in e) qsValue = e[o], c = n("<input type='text' name='" + o + "' value='" + qsValue + "' />"), c.appendTo(u)
        }
        u.appendTo("body").submit();
        s && (f = n("#" + r + " input[type=file]"), f.each(function() {
            var t = u.children("[name=" + n(this).attr("name") + "]");
            n(this).replaceWith(t).appendTo(u)
        }))
    }
    n.submitPage = function(r, u, f, e, o, s, h, c) {
        if (e) {
            o || (o = "Потвърждение");
            var a = {
                    title: o,
                    content: e,
                    okButtonText: "Да",
                    cancelButtonText: "Не"
                },
                l;
            l = s ? {
                okButtonFunction: function(i) {
                    t(h, c) && n.ajax({
                        type: u,
                        url: r,
                        data: n("#" + f).serializeArray(),
                        dataType: "json",
                        success: function() {
                            n.reloadPage();
                            n(i).dialog("destroy")
                        }
                    })
                }
            } : {
                okButtonFunction: function() {
                    t(h, c) && i(r, u, f)
                }
            };
            n.formDialog(n.extend(a, l))
        } else t(h, c) && i(r, u, f)
    }
}(jQuery),
function(n) {
    n.parseQueryString = function(t) {
        t == null && (t = location.search.substring(1, location.search.length));
        t = t.replace(/\+/g, " ");
        var i = {};
        return n.each(t.split("&"), function(n, t) {
            t = t.split("=");
            t[0] = decodeURIComponent(t[0]);
            t[1] = decodeURIComponent(t[1]);
            i[t[0]] = t[1]
        }), i
    }
}(jQuery),
function(n) {
    n.reloadPage = function() {
        location.reload()
    }
}(jQuery),
function(n) {
    n.redirect = function(n) {
        window.location.href = n
    }
}(jQuery),
function(n) {
    n.fn.clearInputFields = function() {
        return this.each(function() {
            function t() {
                switch (this.type) {
                    case "password":
                    case "select-multiple":
                    case "select-one":
                    case "text":
                    case "textarea":
                        n(this).val("");
                        break;
                    case "checkbox":
                    case "radio":
                        this.checked = !1
                }
            }
            n(this).each(t);
            n(this).find(":input").each(t)
        })
    }
}(jQuery),
function(n) {
    n.fn.CascadingDropDown = function(t, i, r) {
        if (typeof t == "undefined") throw "A source element is required";
        if (typeof i == "undefined") throw "An action path is requried";
        var f = "<option><\/option>",
            u = n.extend({}, n.fn.CascadingDropDown.defaults, r);
        return this.each(function() {
            var r = n(this);
            (function() {
                var e = {
                    clearItems: function() {
                        r.empty();
                        r.attr("disabled") || (r.attr("disabled", "disabled"), r.addClass(u.disabledClass))
                    },
                    reset: function() {
                        e.clearItems();
                        r.trigger("change")
                    },
                    initialize: function() {
                        r.children().size() == 0 && (r.attr("disabled") || (r.attr("disabled", "disabled"), r.addClass(u.disabledClass)))
                    },
                    showLoading: function() {
                        e.clearItems();
                        r.append(n(f).attr("value", "").text(u.loadingText))
                    },
                    loaded: function() {
                        r.children().size() != 0 && (r.removeAttr("disabled"), r.removeClass(u.disabledClass));
                        r.trigger("change")
                    },
                    showError: function() {
                        e.clearItems();
                        r.append(n(f).attr("value", "").text(u.errorText))
                    },
                    post: function() {
                        e.showLoading();
                        n.isFunction(u.onLoading) && u.onLoading.call(r);
                        n.ajax({
                            url: i,
                            type: "POST",
                            dataType: "json",
                            data: (typeof u.postData == "function" ? u.postData.apply(n(t)) : u.postData) || (u.parameterName != null ? u.parameterName + "=" + n(t).val() : n(t).serialize()),
                            success: function(t) {
                                e.reset();
                                n.each(t, function() {
                                    r.append(n(f).attr("value", this.Value).text(this.Text))
                                });
                                e.loaded();
                                n.isFunction(u.onLoaded) && u.onLoaded.call(r)
                            },
                            error: function() {
                                e.showError()
                            }
                        })
                    }
                };
                n(t).change(function() {
                    var i = n(t).val();
                    i != "" && i != undefined ? e.post() : e.reset()
                });
                e.initialize()
            })()
        })
    };
    n.fn.CascadingDropDown.defaults = {
        loadingText: "Loading ..",
        errorText: "Error loading data.",
        postData: null,
        onLoading: null,
        onLoaded: null,
        parameterName: "parentId",
        disabledClass: "disabled"
    }
}(jQuery),
function(n) {
    n.fn.autogrow = function() {
        return this.filter("textarea").each(function() {
            var u = this,
                t = n(u),
                e = t.height(),
                f = t.hasClass("autogrow-short") ? 0 : parseInt(t.css("lineHeight")) || 0,
                r = n("<div><\/div>").css({
                    position: "absolute",
                    top: -1e4,
                    left: -1e4,
                    width: t.width(),
                    fontSize: t.css("fontSize"),
                    fontFamily: t.css("fontFamily"),
                    fontWeight: t.css("fontWeight"),
                    lineHeight: t.css("lineHeight"),
                    resize: "none",
                    "word-wrap": "break-word"
                }).appendTo(document.body),
                i = function(n) {
                    var o = function(n, t) {
                            for (var i = 0, r = ""; i < t; i++) r += n;
                            return r
                        },
                        i = u.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>").replace(/ {2,}/g, function(n) {
                            return o("&nbsp;", n.length - 1) + " "
                        });
                    n && n.data && n.data.event === "keydown" && n.keyCode === 13 && (i += "<br />");
                    r.css("width", t.width());
                    r.html(i + (f === 0 ? "..." : ""));
                    t.height(Math.max(r.height() + f, e))
                };
            t.change(i).keyup(i).keydown({
                event: "keydown"
            }, i);
            n(window).resize(i);
            i()
        })
    }
}(jQuery)