(function() {
    var type_impls = Object.fromEntries([["hir_def",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AstPtr%3CN%3E\" class=\"impl\"><a href=\"#impl-AstPtr%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; AstPtr&lt;N&gt;<div class=\"where\">where\n    N: AstNode,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(node: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.reference.html\">&amp;N</a>) -&gt; AstPtr&lt;N&gt;</h4></section><section id=\"method.to_node\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">to_node</a>(&amp;self, root: &amp;SyntaxNode&lt;RustLanguage&gt;) -&gt; N</h4></section><section id=\"method.syntax_node_ptr\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">syntax_node_ptr</a>(&amp;self) -&gt; SyntaxNodePtr&lt;RustLanguage&gt;</h4></section><section id=\"method.text_range\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">text_range</a>(&amp;self) -&gt; TextRange</h4></section><section id=\"method.cast\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">cast</a>&lt;U&gt;(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AstPtr&lt;U&gt;&gt;<div class=\"where\">where\n    U: AstNode,</div></h4></section><section id=\"method.kind\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">kind</a>(&amp;self) -&gt; SyntaxKind</h4></section><section id=\"method.upcast\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">upcast</a>&lt;M&gt;(self) -&gt; AstPtr&lt;M&gt;<div class=\"where\">where\n    M: AstNode,\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;M&gt;,</div></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from_raw\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">try_from_raw</a>(raw: SyntaxNodePtr&lt;RustLanguage&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AstPtr&lt;N&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Like <code>SyntaxNodePtr::cast</code> but the trait bounds work out.</p>\n</div></details><section id=\"method.wrap_left\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">wrap_left</a>&lt;R&gt;(self) -&gt; AstPtr&lt;<a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;N, R&gt;&gt;<div class=\"where\">where\n    <a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;N, R&gt;: AstNode,</div></h4></section><section id=\"method.wrap_right\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">wrap_right</a>&lt;L&gt;(self) -&gt; AstPtr&lt;<a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, N&gt;&gt;<div class=\"where\">where\n    <a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, N&gt;: AstNode,</div></h4></section></div></details>",0,"hir_def::hir::type_ref::TypePtr","hir_def::body::ExprPtr","hir_def::body::PatPtr","hir_def::body::LabelPtr","hir_def::body::FieldPtr","hir_def::body::PatFieldPtr","hir_def::body::ExprOrPatPtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AstPtr%3CN%3E\" class=\"impl\"><a href=\"#impl-Clone-for-AstPtr%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for AstPtr&lt;N&gt;<div class=\"where\">where\n    N: AstNode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; AstPtr&lt;N&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.84.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir_def::hir::type_ref::TypePtr","hir_def::body::ExprPtr","hir_def::body::PatPtr","hir_def::body::LabelPtr","hir_def::body::FieldPtr","hir_def::body::PatFieldPtr","hir_def::body::ExprOrPatPtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AstPtr%3CN%3E\" class=\"impl\"><a href=\"#impl-Debug-for-AstPtr%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for AstPtr&lt;N&gt;<div class=\"where\">where\n    N: AstNode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.84.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.84.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir_def::hir::type_ref::TypePtr","hir_def::body::ExprPtr","hir_def::body::PatPtr","hir_def::body::LabelPtr","hir_def::body::FieldPtr","hir_def::body::PatFieldPtr","hir_def::body::ExprOrPatPtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-AstPtr%3CN%3E\" class=\"impl\"><a href=\"#impl-Hash-for-AstPtr%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for AstPtr&lt;N&gt;<div class=\"where\">where\n    N: AstNode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.84.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.84.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/hash/mod.rs.html#235-237\">Source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;[Self], state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.84.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.84.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hir_def::hir::type_ref::TypePtr","hir_def::body::ExprPtr","hir_def::body::PatPtr","hir_def::body::LabelPtr","hir_def::body::FieldPtr","hir_def::body::PatFieldPtr","hir_def::body::ExprOrPatPtr"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-AstPtr%3CN%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-AstPtr%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for AstPtr&lt;N&gt;<div class=\"where\">where\n    N: AstNode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;AstPtr&lt;N&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.84.0/src/core/cmp.rs.html#261\">Source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.84.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir_def::hir::type_ref::TypePtr","hir_def::body::ExprPtr","hir_def::body::PatPtr","hir_def::body::LabelPtr","hir_def::body::FieldPtr","hir_def::body::PatFieldPtr","hir_def::body::ExprOrPatPtr"],["<section id=\"impl-Copy-for-AstPtr%3CN%3E\" class=\"impl\"><a href=\"#impl-Copy-for-AstPtr%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for AstPtr&lt;N&gt;<div class=\"where\">where\n    N: AstNode,</div></h3></section>","Copy","hir_def::hir::type_ref::TypePtr","hir_def::body::ExprPtr","hir_def::body::PatPtr","hir_def::body::LabelPtr","hir_def::body::FieldPtr","hir_def::body::PatFieldPtr","hir_def::body::ExprOrPatPtr"],["<section id=\"impl-Eq-for-AstPtr%3CN%3E\" class=\"impl\"><a href=\"#impl-Eq-for-AstPtr%3CN%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for AstPtr&lt;N&gt;<div class=\"where\">where\n    N: AstNode,</div></h3></section>","Eq","hir_def::hir::type_ref::TypePtr","hir_def::body::ExprPtr","hir_def::body::PatPtr","hir_def::body::LabelPtr","hir_def::body::FieldPtr","hir_def::body::PatFieldPtr","hir_def::body::ExprOrPatPtr"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[13750]}