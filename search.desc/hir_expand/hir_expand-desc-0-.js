searchState.loadedDescShard("hir_expand", 0, "<code>hir_expand</code> deals with macro expansion.\nThis struct contains AST for a single <code>macro_rules</code> …\nIn Rust, macros expand token trees to token trees. When we …\nExpansionInfo mainly describes how to map text range …\nInput to the analyzer is a set of files, where each file …\n<code>MacroCallId</code> identifies a particular macro invocation, like …\nThe macro definition has errors.\nThe macro for this call is disabled.\nAttribute macro expansion is disabled.\nA higher level attributes based on TokenTree, with also …\nBuiltin macros and attributes\nIf this is a macro call, returns the syntax node of the …\nDefines a unit of change that can applied to the database …\nDefines database &amp; queries for macro expansion.\nCompiled declarative macro expanders (<code>macro_rules!</code> and …\nEager expansion related utils\nReturn expansion information if it is a macro-expansion …\nReturns the file containing the macro invocation.\nThings to wrap other things in file ids.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nMachinery for hygienic macros.\nBuiltin attributes resolved by nameres.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn whether this file is an attr macro\nReturn whether this file is the pseudo expansion of the …\nReturn whether this file is an include macro\nMaps up the text range out of the expansion hierarchy back …\nMaps up the text range out of the expansion hierarchy back …\nMaps up the text range out of the expansion hierarchy back …\nMaps up the text range out of the expansion hierarchy back …\nMaps the passed in file range down into a macro expansion …\nMaps the passed in file range down into a macro expansion …\nMaps up the text range out of the expansion into is macro …\nA lowering for <code>use</code>-paths (more generally, paths without …\nSee <code>Name</code>.\nIf this is a macro call, returns the syntax node of the …\nReturns the original file range that best describes the …\nReturns the original file range that best describes the …\nReturns the original file of this macro call hierarchy.\nReturns the original file of this macro call hierarchy …\nThe new, unstable <code>macro m {}</code> flavor.\nThe old, <code>macro_rules! m {}</code> flavor.\nInserts whitespace and replaces <code>$crate</code> in macro expansions.\nProc Macro Expander stuff\nFIXME: It probably should implement in proc-macro\nLooks up the span at the given offset.\nLooks up the span at the given offset.\nSpan maps for real files and macro expansions.\nSyntactical index of the invoking <code>#[derive]</code> attribute.\nIndex of the derive macro in the derive attribute\nThe “parent” macro call. We will resolve the same …\nSome if this is a macro call for an eager macro. Note that …\nSyntactical index of the invoking <code>#[attribute]</code>.\n<code>#[attr = &quot;string&quot;]</code>\nSyntactical attributes, without filtering of <code>cfg_attr</code>s.\n<code>#[attr(subtree)]</code>\nProcesses <code>cfg_attr</code>s, returning the resulting semantic <code>Attrs</code>…\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nParses this attribute as a token tree consisting of comma …\n#[path(ident)]\n#[path = “string”]\n#[path = “string”]\n#[path TokenTree]\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA simplified version of quote-crate like quasi quote macro\nWraps <code>TokenTreesView</code> with a delimiter (a subtree, but …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nStuff like <code>line!</code> and <code>file!</code>.\n<code>global_allocator</code> and such.\n<code>derive(Copy)</code> and such.\nBuilt-in eagerly expanded fn-like macros (<code>include!</code>, <code>concat!</code>…\nOld-style <code>macro_rules</code> or the new macros 2.0\nRepresentative struct for the query group.\nThe thing we love the most here in rust-analyzer – …\nFetches (and compiles) the expander of this decl macro.\nSpecial case of the previous query for procedural macros. …\nThis expands the given macro call, but with different …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nGet access to extra methods pertaining to this query. You …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nLike <code>in_db</code>, but gives access to methods for setting the …\nMacro ids. That’s probably the tricksiest bit in …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLowers syntactic macro call to a token tree …\nFetches the expander for this macro.\nImplementation for the macro case.\nFirewall query that returns the errors from the …\nMain public API – parses a hir file, not caring whether …\nRetrieves the span to be used for a proc-macro expansions …\nThe proc macros.\nSet the value of the <code>proc_macros</code> input.\nSet the value of the <code>proc_macros</code> input with a specific …\nOld-style <code>macro_rules</code> or the new macros 2.0\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\n<code>AstId</code> points to an AST node in any file.\n<code>InFile&lt;T&gt;</code> stores a value of <code>T</code> inside a particular …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nFalls back to the macro call range if the node cannot be …\nFalls back to the macro call range if the node cannot be …\nAttempts to map the syntax node back up its macro calls.\nAttempts to map the syntax node back up its macro calls.\nAttempts to map the syntax node back up its macro calls.\nAttempts to map the syntax node back up its macro calls.\nFalls back to the macro call range if the node cannot be …\nFalls back to the macro call range if the node cannot be …\nFalls back to the macro call range if the node cannot be …\nFalls back to the macro call range if the node cannot be …\nIdentifier produced by an opaque expansion is always …\nIdentifier produced by a semi-transparent expansion may be …\nA property of a macro expansion that determines how …\nIdentifier produced by a transparent expansion is always …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the transparency is <code>Opaque</code>.\nA template that the attribute input must match. Only …\nAttributes that have a special meaning to rustc or rustdoc.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAbsolute path (::foo)\n<code>$crate</code> from macro expansion\n<code>self::</code> is <code>Super(0)</code>\nIf this path is a single identifier, like <code>foo</code>, return its …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a <code>ModPath</code> from a <code>PathKind</code>, with no extra path …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the number of segments in the path (counting …\n<code>Name</code> is a wrapper around string, which is used in hir for …\nReturns the text this name represents if it isn’t a …\nReturns the tuple index this name represents if it is a …\nReturns the argument unchanged.\nGenerates a new name that attempts to be unique. Should …\nCalls <code>U::from(self)</code>.\nReturns true if this is a fake name for things missing in …\nA fake name for things missing in the source code.\nWhether this name needs to be escaped in the given edition …\nA custom proc-macro expander handle. This handle together …\nContains the error value\nContains the success value\nThe proc-macro panicked.\nA loaded proc-macro.\nA proc-macro expander implementation.\nThe server itself errored out.\nThe macro is explicitly disabled due to proc-macro …\nA dummy expander that always errors. This expander is used …\nWhether this proc-macro is disabled for early name …\nA dummy expander that always errors. This expander is used …\nRun the expander with the given input subtree, optional …\nThe expander handle for this proc macro.\nFetch the <code>CustomProcMacroExpander</code>s and their corresponding …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe macro is explicitly disabled and cannot be expanded.\nThe macro is explicitly disabled due to proc-macro …\nThe macro-expander is missing or has yet to be build.\nAn expander that always errors due to the actual …\nThe name of the proc macro.\nSpanmap for a macro file\nSpanmap for a macro file\nSpanmap for a real file\nSpanmap for a real file\nSpanmap for a macro file or a real file\nCreates a real file span map that returns absolute ranges …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIndex of the matched macro arm on successful expansion for …\nThe token cannot join with the following token to form a …\nThe token can join with the following token to form a …\nThe token can join with the following token to form a …\nIndicates whether a token can join with the following …\nThe anchor this span is relative to.\nThe syntax context of the span.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNumber of following token trees that belong to this …\nThe text range of this span, relative to the anchor. We …")