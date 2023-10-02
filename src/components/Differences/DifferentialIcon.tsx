import {
  Code2,
  MonitorSmartphone,
  Lightbulb,
  MessageCircle,
} from 'lucide-react'
import React from 'react'
import colors from '@/db/colors.json'

interface IDifferentialIcon {
  icon: string
}

export default function DifferentialIcon({ icon }: IDifferentialIcon) {
  return (
    <>
      {icon === 'iconTag' && (
        <Code2 color={colors.iconColor[500]} size={84} strokeWidth={1.5} />
      )}
      {icon === 'iconMonitor' && (
        <MonitorSmartphone
          color={colors.iconColor[500]}
          size={84}
          strokeWidth={1.5}
        />
      )}
      {icon === 'iconLightbulb' && (
        <Lightbulb color={colors.iconColor[500]} size={84} strokeWidth={1.5} />
      )}
      {icon === 'balloon' && (
        <MessageCircle
          color={colors.iconColor[500]}
          size={84}
          strokeWidth={1.5}
        />
      )}
    </>
  )
}
