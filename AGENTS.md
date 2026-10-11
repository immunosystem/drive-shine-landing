<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the auto repair experience as a single Russian-language landing route with in-page anchors; this preserves the direct service-to-booking journey.
- Use the shared design tokens and shadcn primitives for booking controls and overlays; this keeps the dark industrial presentation consistent.
- Keep booking submission client-only and expose named form fields with POST semantics; this enables later integration without sending personal data in the demo.
