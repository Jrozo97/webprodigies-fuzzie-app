import Category from "@/components/icons/Category"
import ClipBoard from "@/components/icons/ClipBoard"
import Home from "@/components/icons/Home"
import Payment from "@/components/icons/Payment"
import Settings from "@/components/icons/Settings"
import Templates from "@/components/icons/Templates"
import Workflows from "@/components/icons/Workflows"
import { Connection } from "./types"


export const clients = [...new Array(10)].map((client, index) => ({
  href: `/images/${index+1}.png`,
}))

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: '/images/p1.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: '/images/p2.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: '/images/p3.png',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: '/images/p4.png',
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '/images/p5.png',
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: '/images/p6.png',
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail: '/images/p1.png',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: '/images/p2.png',
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail: '/images/p3.png',
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail: '/images/p4.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail: '/images/p5.png',
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail: '/images/p6.png',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail: '/images/p1.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail: '/images/p2.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail: '/images/p3.png',
  },
]

export const menuOptions = [
  { name: 'Dashboard', Component: Home, href: '/dashboard' },
  { name: 'Workflows', Component: Workflows, href: '/workflows' },
  { name: 'Settings', Component: Settings, href: '/settings' },
  { name: 'Connections', Component: Category, href: '/connections' },
  { name: 'Billing', Component: Payment, href: '/billing' },
  { name: 'Templates', Component: Templates, href: '/templates' },
  { name: 'Logs', Component: ClipBoard, href: '/logs' },
]


export const CONNECTIONS: Connection[] = [
  {
    title: 'Google Drive',
    description: 'Connect your google drive to listen to folder changes',
    image: '/images/googleDrive.png',
    connectionKey: 'googleNode',
    alwaysTrue: true,
  },
  {
    title: 'Discord',
    description: 'Connect your discord to send notification and messages',
    image: '/images/discord.png',
    connectionKey: 'discordNode',
    accessTokenKey: 'webhookURL',
  },
  {
    title: 'Notion',
    description: 'Create entries in your notion dashboard and automate tasks.',
    image: '/images/notion.png',
    connectionKey: 'notionNode',
    accessTokenKey: 'accessToken',
  },
  {
    title: 'Slack',
    description:
      'Use slack to send notifications to team members through your own custom bot.',
    image: '/images/slack.png',
    connectionKey: 'slackNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
]