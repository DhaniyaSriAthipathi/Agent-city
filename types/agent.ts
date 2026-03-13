export interface Agent {
  id: string
  name: string
  type: string
  status: 'idle' | 'running' | 'failed' | 'completed'
  reputation: number
  usageCount: number
  capabilities: string[]
}

export interface Workflow {
  id: string
  goal: string
  agents: Agent[]
  status: 'pending' | 'running' | 'completed' | 'failed'
  progress: number
}

export interface SystemHealth {
  status: 'healthy' | 'degraded' | 'critical'
  activeAgents: number
  failedAgents: number
  autoHealed: number
}
