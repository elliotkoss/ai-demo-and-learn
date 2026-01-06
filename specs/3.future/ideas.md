# Future Ideas & Features

## Organization Rules

1. **Priority Numbering**: Ideas are numbered sequentially by priority. Lower numbers = higher priority.
2. **Week-Assigned Ideas**: All ideas assigned to a week (prioritized work) must have numbers lower than any future idea.
3. **Future Ideas**: Future ideas (not assigned to a week) must have numbers higher than all week-assigned ideas.
4. **Sequential Ordering + Week Headers**: Within each week, ideas are ordered by priority. Within future ideas, they are ordered by priority. The details section must follow the same priority order - all week-assigned ideas first (by week, then priority), then all future ideas (by priority). Include a copy/paste list of week headers above the week sections, and use descriptive week titles (not shorthand).
5. **Five Rules Rule**: There must be exactly 5 organization rules, and this rule is one of them.

---

## Week Headers

(Copy/paste list for quick navigation)

- [Week-Assigned Ideas](#week-assigned-ideas)
- [Future Ideas](#future-ideas)

---

## Week-Assigned Ideas

*No ideas currently assigned to a week.*

---

## Future Ideas

| # | Idea | Status |
|---|------|--------|
| 1 | Beehiiv Newsletter Integration | Blocked |
| 2 | Remove Unused Sidebar Component | Open |
| 3 | Audit & Remove Unused UI Components | Open |

---

## Details

### 1. Beehiiv Newsletter Integration

**Status:** Blocked

**Blocker:** Need to set up email for @aidemolearn.com domain

**Description:**
Integrate Beehiiv newsletter signup into the event registration form. When users sign up for events and opt-in to the newsletter, their email should be automatically added to our Beehiiv publication.

**Requirements:**
- Set up @aidemolearn.com domain email
- Get Beehiiv Publication ID
- Get Beehiiv API Key
- Uncomment and configure the Beehiiv API integration in `src/components/EventSignupForm.tsx`

**Implementation Notes:**
The code structure is already in place in the EventSignupForm component, just commented out and waiting for credentials.

---

### 2. Remove Unused Sidebar Component

**Status:** Open

**Description:**
The `src/components/ui/sidebar.tsx` file is 22KB and not used anywhere in the application. It was likely added by a UI component library (shadcn/ui) but never utilized.

**Action:**
- Verify sidebar.tsx is not imported anywhere
- Delete `src/components/ui/sidebar.tsx`

**Impact:** Reduces bundle size and removes dead code.

---

### 3. Audit & Remove Unused UI Components

**Status:** Open

**Description:**
The `/src/components/ui/` directory contains many shadcn/ui components that may not be used in the application. An audit should be performed to identify and remove unused components.

**Potential candidates for removal:**
- `carousel.tsx`
- `menubar.tsx`
- `context-menu.tsx`
- `resizable.tsx`
- `input-otp.tsx`
- And others not actively used

**Action:**
- Run a grep/search for imports of each UI component
- Remove components with zero imports outside their own file
- Test build after removal

**Impact:** Reduces bundle size, simplifies codebase, fewer dependencies to maintain.
