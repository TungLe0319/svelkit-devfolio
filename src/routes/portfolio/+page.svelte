<script>
 import AboutSection from "$lib/components/Sections/About/AboutSection.svelte";
	import PortfolioSection from "$lib/components/Sections/Portfolio/PortfolioSection.svelte";
import Hero from '../../lib/components/Hero.svelte'
  import { Timeline, TimelineItem, Button } from "flowbite-svelte";
  import { ArrowRightOutline, CalendarWeekSolid } from "flowbite-svelte-icons";

  const heroProps = {
    image:
      "https://images.unsplash.com/photo-1685391722227-df9eec0583ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1445&q=80",
    title: "About This Project",
    subTitle: "And a little about me",
    height: 100,
  };
</script>

<main class=" pt-14 flex justify-center items-center px-6">
	<div class="p-1 justify-center flex flex-col items-center">

    <PortfolioSection/>
    </div>
    </main>

<style lang="scss" scoped>
</style>
