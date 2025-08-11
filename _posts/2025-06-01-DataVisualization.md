---
layout: distill
title: How to create effective presentations
date: 2025-06-01
description: Lessons from "Storytelling with data" by Cole Nussbaumer
featured: false
tags: DataVisualization
categories: Presentation
related_posts: false
toc:
  - name: How to focus the audience's attention?
    subsections:
    - name: Remove clutter
    - name: Exploit position on page
    - name: Use preemptive attributes
  - name: Some design concepts
    subsections:
    - name: Affordance
    - name: Accessibility
    - name: Aesthetics
    - name: Acceptance
  - name: A practical guide to preparing presentations
    subsections:
    - name: Telling a story
    - name: Improving the visuals
---

*Academics have (unfortunately) been known to be quite terrible sometimes at presenting their findings. Yet presentation skills are game-changing with regards to how the audience will listen to your talk. So having dug into data visualization a bit, here are some of the lessons I retrained from "Storytelling with data" by Cole Nussbaumer (which I highly recommend).*


## How to focus the audience's attention?
The audience has about <span style="color: var(--global-theme-color);">3–8 seconds </span>of attention, during which time we decide whether to continue to look at what is in front of us or direct our attention to something else.

### Remove clutter
> **“Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.”** Antoine de Saint-Exupéry, Airman's Odyssey

Following Gestalt principles of visual perception, are <span style="color: var(--global-theme-color);">perceived as a group</span> objects with:
- Proximity (physically close)
- Similarity (similar in colour, shape, size, orientation, etc.)
- Enclosure (physically enclosed with lines or background colour, etc.)
- Closure (fitting a recognizable shape, even if parts are missing -ie: dashed)
- Continuity (similar to closure)
- Connection (physically connected)

$\Rightarrow$ The mind naturally creates logic from visual cues. So remove anything that take up space and mental load but doesn't add information.


### Exploit position on page

Without visual cues, we<span style="color: var(--global-theme-color);"> typically start at the top left</span> of our visual and do <span style="color: var(--global-theme-color);">zigzagging “z’s”</span> with our eyes across the page.

$\Rightarrow$ Put important things at the <span style="color: var(--global-theme-color);">top</span>

### Use preemptive attributes
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/PreemptiveAttributes.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Example of preemptive attributes (taken from "Storytelling with data" by Cole Nussbaumer).
</div>

$\Rightarrow$ Draw the attention quickly to a specific area

$\Rightarrow$ Create a <span style="color: var(--global-theme-color);">visual hierarchy</span> of information $\rightarrow$ gives explicit instruction on how to process information

<u>Note:</u> Be mindful that highlighting one point can make other points less visible.

<br/>

## Some design concepts

- Good design fades in the background and gets un-noticed.
- Well‐designed objects are <span style="color: var(--global-theme-color);">easy to interpret</span> and <span style="color: var(--global-theme-color);">understand.</span>

### Affordance
Make it obvious how the product is to be used.

### Accessibility
Make it usable/understandale by people of diverse abilities (ie: varying technical skills).

- If there is a conclusion you want your audience to reach, <span style="color: var(--global-theme-color);">state it in words</span>.
- Annotate important or interesting points <span style="color: var(--global-theme-color);">directly on graph</span>.
	

### Aesthetics: Ensuring visual order
More aesthetic designs seem easier to use than less aesthetic designs.
Aesthetically pleasing visuals increases audience's tolerance to design issues. <br/>

Creating a sense of visual organization using:
- Colour (have a strategic use of <span style="color: var(--global-theme-color);">contrast</span>)
- Alignment
- White space (preserve white space)

### Acceptance
An effective design must be accepted by its intended audience.

<br/>

## A practical guide to preparing presentations


### Telling a story

#### 1. Capture <span style="color: var(--global-hover-color);">big idea</span>
What do you need audience to know?

#### 2. Write <span style="color: var(--global-hover-color);">headline</span> to create the story flow
Each headline should be the title of a slide.

#### 3. <span style="color: var(--global-hover-color);">Repeat</span> message
- *Tell audience what you’re going to tell them*: Add a summary with each bullet corresponding to a headline in order
- *Tell audience*: The content of the slides
- *Summarize what you just told them*: Repeat main points in conclusion

#### 4. <span style="color: var(--global-hover-color);">Self‐reinforce</span> all information 
On each given slide (title should connect with content, text with visuals)


### Improving the visuals
#### 1. Select <span style="color: var(--global-hover-color);">appropriate visual</span>
- Simple text for one or two numbers
- Table to communicate to mixed audience with different interests (across rows)
- Line graphs for continous data <br/>
<u>Note:</u> Avoid secondary axes in graphs. Instead label directly data with values (to emphasize specific numberss), or pull apart vertically to create new axis (to emphasize general trend).
- Bar graphs for categorical data

#### 2. Eliminate <span style="color: var(--global-hover-color);">clutter</span> (only keep the data):
- Remove chart borders, gridlines, data markers and text (title and legend)
- Change background (x & y‐axis lines, labels) colour to <span style="color: var(--global-theme-color);">grey</span> $\rightarrow$ Colour stands out more against grey than black
- Label lines directly $\rightarrow$ Reduce short-term memory over-use

#### 3. Focus <span style="color: var(--global-hover-color);">attention</span>
- Use pre-emptive attributes to draw attention to specific points in the data supporting claim.
- Use colour <span style="color: var(--global-theme-color);">sparingly</span> and <span style="color: var(--global-theme-color);">consistently</span>  $\rightarrow$ Same colour layout across avoids confusion

#### 4. Improve <span style="color: var(--global-hover-color);">accessibility</span>
- Use simple text (easy to read) to make graph title
- Add axis titles 
- Be colour-blind friendly <br/>
<u>Note:</u> Blue and orange alternative for green and red for most colour-blind people.

#### 5. Improve <span style="color: var(--global-hover-color);">aesthetics</span>
- Align elements (right or left -justified). <br/>
ie: align title, legend, vertical y‐axis title at the top left $\rightarrow$ audience knows how to read the graph before getting to the data
- Avoid diagonal element
- Preserve white space <br/>
ie: for bar graphs, bar width should be greater than white space between the bars

