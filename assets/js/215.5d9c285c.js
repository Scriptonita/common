(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{412:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("router-link",{attrs:{to:"/util/"}},[t._v("Polkadot JS Common")]),t._v(" › "),n("router-link",{attrs:{to:"/util/globals.html"}},[t._v("Globals")]),t._v(" › "),n("router-link",{attrs:{to:"/util/modules/_hex_fixlength_.html"}},[t._v('"hex/fixLength"')])],1),t._v(" "),n("h1",{attrs:{id:"external-module-hex-fixlength"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#external-module-hex-fixlength"}},[t._v("#")]),t._v(' External module: "hex/fixLength"')]),t._v(" "),n("h2",{attrs:{id:"index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" Index")]),t._v(" "),n("h3",{attrs:{id:"functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/util/modules/_hex_fixlength_.html#hexfixlength"}},[t._v("hexFixLength")])],1)]),t._v(" "),n("h2",{attrs:{id:"functions-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#functions-2"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),n("h3",{attrs:{id:"hexfixlength"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hexfixlength"}},[t._v("#")]),t._v(" hexFixLength")]),t._v(" "),n("p",[t._v("▸ "),n("strong",[t._v("hexFixLength")]),t._v("("),n("code",[t._v("value")]),t._v(": string, "),n("code",[t._v("bitLength")]),t._v(": number, "),n("code",[t._v("withPadding")]),t._v(": boolean): "),n("em",[t._v("string")])]),t._v(" "),n("p",[n("em",[t._v("Defined in "),n("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/hex/fixLength.ts#L24",target:"_blank",rel:"noopener noreferrer"}},[t._v("hex/fixLength.ts:24"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[n("code",[t._v("name")])]),t._v(" hexFixLength")]),t._v(" "),n("p",[n("strong",[n("code",[t._v("summary")])]),t._v(" Shifts a hex string to a specific bitLength")]),t._v(" "),n("p",[n("strong",[n("code",[t._v("description")])]),t._v("\nReturns a "),n("code",[t._v("0x")]),t._v(" prefixed string with the specified number of bits contained in the return value. (If bitLength is -1, length checking is not done). Values with more bits are trimmed to the specified length. Input values with less bits are returned as-is by default. When "),n("code",[t._v("withPadding")]),t._v(" is set, shorter values are padded with "),n("code",[t._v("0")]),t._v(".")]),t._v(" "),n("p",[n("strong",[n("code",[t._v("example")])]),t._v(" "),n("BR")],1),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hexFixLength "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/util'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fixed'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hexFixLength")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x12'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 0x12")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fixed'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hexFixLength")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x12'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 0x0012")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fixed'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hexFixLength")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x0012'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 0x12")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[n("strong",[t._v("Parameters:")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Default")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("value")])]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("bitLength")])]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("-1")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("withPadding")])]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("false")])])])]),t._v(" "),n("p",[n("strong",[t._v("Returns:")]),t._v(" "),n("em",[t._v("string")])])])}),[],!1,null,null,null);s.default=a.exports}}]);